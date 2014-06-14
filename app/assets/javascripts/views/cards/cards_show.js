Trellino.Views.CardsShow = Backbone.View.extend({
  template: JST['cards/show'],
  
  initialize: function () {
  },
  
  render: function () {
    var renderedContent = this.template({
      card: this.model
    });
    this.$el.html(renderedContent);

    return this;
  }
});