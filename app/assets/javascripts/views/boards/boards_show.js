Trellino.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
  events: {
		'click .toggle-form, .cancel-card': 'toggleCard',
		'click .create-card': 'createCard',
    'click .delete-list': 'deleteList'
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    this.listenTo(this.collection, "remove", this.render);
    
    this.model.lists().each(this.addList.bind(this));
    
    this._listsViews = [];
    this._listsNewView = new Trellino.Views.ListsNew({
      model: this.model
    });
    this.addSubview(".list-new", this._listsNewView);
    
    $('body').css('background-color', '#23719f');
  },
  
  addList: function (list) {
    // if (this.model.lists().length == 4) {
    //   this.removeSubview(".list-new", this._listsNewView);
    // }
    var listsShowView = new Trellino.Views.ListsShow({
      model: list
    });
    this.addSubview(".list-show", listsShowView);
    listsShowView.render();
    this._listsViews.push({view: listsShowView, id: list.id});
  },
  
  render: function () {
    var renderedContent = this.template({
      board: this.model
    });

    this.$el.html(renderedContent);
    this.renderSubviews();

    return this;
  },
  
  toggleCard: function (event) {
		event.preventDefault();
    $(event.target).parent().find('.new-card').toggle();
	},
  
  createCard: function (event) {
    event.preventDefault();
    
    var listId = parseInt($(event.target).parent().attr("data-id"));
    var $list = $(event.target).parent();
    var params = {title: $list.find('#card-title').val(), rank: 0, list_id: listId};
		this.collection.get(listId).cards().create(params, { wait: true });
    
    $list.find('.new-card').toggle();
    $list.find('#card-title').val('');
	},
  
  deleteList: function (event) {
    event.preventDefault();
    
    var listId = parseInt($(event.target).attr("data-id"));
    var list = this.collection.get(listId);
    
		list.destroy();
    this.collection.remove(list);
    for (var i = 0; i < this._listsViews.length; i += 1) {
      if (this._listsViews[i].id === listId) {
        this.removeSubview(".list-show", this._listsViews[i].view);
      }
    }
  }
});