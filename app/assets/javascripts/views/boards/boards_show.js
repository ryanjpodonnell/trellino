Trellino.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
  events: {
		'click .toggle-form, .cancel-card': 'toggleCard',
		'click .create-card': 'createCard'
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.model.lists(), "add", this.addList);
    
    this.model.lists().each(this.addList.bind(this));
    
    var listsNewView = new Trellino.Views.ListsNew({
      model: this.model
    });
    this.addSubview(".list-new", listsNewView);
    
    $('body').css('background-color', '#23719f');
  },
  
  addList: function (list) {
    var listsShowView = new Trellino.Views.ListsShow({
      model: list
    });
    
    this.addSubview(".list-show", listsShowView);
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
	}
});