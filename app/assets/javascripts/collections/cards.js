Trellino.Collections.Cards = Backbone.Collection.extend({
  comparator: "rank",
  
  initialize: function(options) {
    this.list = options.list;
  },
  
  model: Trellino.Models.Card,
  
  url: "/api/cards"
});
