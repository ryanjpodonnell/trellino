Trellino.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
  events: {
		'click .toggle-list, .cancel-list': 'toggleList',
		'click .create-list'              : 'createList',
    'click .delete-list'              : 'deleteList'
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add remove", this.render);
    this.listenTo(this.collection, "add", this.addList);
    
    this.collection.each(this.addList.bind(this));
    
    $('body').css('background-color', '#23719f');
  },
  
  addList: function (list) {
    var listsShowView = new Trellino.Views.ListsShow({
      model: list,
      collection: list.cards()
    });
    
    this.addSubview(".list-show", listsShowView);
    listsShowView.render();
  },
  
  render: function () {
    var renderedContent = this.template({
      board: this.model
    });

    this.$el.html(renderedContent);
    this.renderSubviews();
    
    $( ".card" ).draggable({ addClasses: false });
    $( ".list" ).draggable({ addClasses: false });
    
    this.collection.length >= 4 ? $('#test').hide() : $('#test').show();
    
    return this;
  },
  
  deleteList: function (event) {
    event.preventDefault();
    
    var listId = parseInt($(event.target).attr("data-id"));
    var list = this.collection.get(listId);
    
    for (var i = 0; i < this.subviews()['.list-show'].length; i += 1) {
      if (this.subviews()['.list-show'][i].model.id === listId) {
        this.removeSubview('.list-show', this.subviews()['.list-show'][i]);
      }
    }
    
		list.destroy();
    this.collection.remove(list);
  },
  
  toggleList: function (event) {
		event.preventDefault();
    
    $('.new-list').toggle();
  },
  
  createList: function (event) {
    event.preventDefault();
    
    var title = $('#list-title').val();
    var params = {title: title, rank: 0, board_id: this.model.id};
		this.model.lists().create(params, { wait: true });
    
    $('#list-title').val('');
  }
});