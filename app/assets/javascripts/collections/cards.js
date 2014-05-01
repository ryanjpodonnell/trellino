Trellino.Collections.Cards = Backbone.Collection.extend({
  url: "/api/cards",
  initialize: function(options) {
    this.list = options.list;
  },

  model: Trellino.Models.Card,
  
  comparator: "rank"
  
});
