Trellino.Views.CardsShow = Backbone.CompositeView.extend({
  template: JST['cards/show'],
  
  initialize: function () {
  },
  
  render: function () {
    var renderedContent = this.template({
      card: this.model
    });
    debugger
    this.$el.html(renderedContent);

    return this;
  }
});