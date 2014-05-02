Trellino.Collections.Lists = Backbone.Collection.extend({
  comparator: "rank",
  
  initialize: function(options) {
    this.board = options.board;
  },
  
  model: Trellino.Models.List,
  
  url: "/api/lists"
});
