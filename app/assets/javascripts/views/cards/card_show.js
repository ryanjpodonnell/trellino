Trellino.Views.CardsShow = Backbone.View.extend({
  template: JST['cards/show'],
  
  events: {
  },
  
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