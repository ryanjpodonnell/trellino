Trellino.Views.ListsNew = Backbone.View.extend({
  template: JST['lists/new'],
  
  events: {
		'click .toggle-form, .cancel-list': 'toggleList',
		'click .create-list': 'createList'
  },
  
  render: function () {
    var renderedContent = this.template({
      board: this.board
    });

    this.$el.html(renderedContent);

    return this;
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
  }
});