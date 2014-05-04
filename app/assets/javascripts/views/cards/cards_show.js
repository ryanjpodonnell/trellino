Trellino.Views.CardsShow = Backbone.CompositeView.extend({
  template: JST['cards/show'],
  
  initialize: function (options) {
  },
  
  render: function () {
    var renderedContent = this.template({
      card: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});