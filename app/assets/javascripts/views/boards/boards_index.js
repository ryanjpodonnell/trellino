Trellino.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  
  events: {
		'click .toggle-form, .cancel-board': 'toggleBoard',
		'click .create-board': 'createBoard'
	},
  
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    $('body').css('background-color', '#fff');
  },
  
  render: function () {
    var renderedContent = this.template({
      boards: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  },
  
  toggleBoard: function (event) {
		event.preventDefault();
		$('.new-board').toggle();
	}, 
  
  createBoard: function (event) {
    event.preventDefault();
    // var params = $('form').serializeJSON().board;
    var params = {title: $('#board-title').val()}
		this.collection.create(params, { wait: true });

		Backbone.history.navigate("", { trigger: true });
	}
});
