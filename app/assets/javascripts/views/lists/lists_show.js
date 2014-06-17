Trellino.Views.ListsShow = Backbone.View.extend({
  template: JST['lists/show'],
  
  events: {
		'click .toggle-card, .cancel-card': 'toggleCard',
		'click .create-card'              : 'createCard'
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.render);
  },
  
  render: function () {
    var renderedContent = this.template({
      list: this.model
    });

    this.$el.html(renderedContent);

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
    var listTitle = $list.find('#card-title').val();
    var params = {title: listTitle, rank: 0, list_id: listId};
		this.collection.create(params, { wait: true });
    
    $list.find('#card-title').val('');
	}
});