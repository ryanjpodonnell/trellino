Trellino.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  
  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
    $('body').css('background-color', '#fff');
  },
  
  render: function () {
    var renderedContent = this.template({
      boards: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  }
});
