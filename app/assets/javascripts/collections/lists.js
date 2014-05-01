Trellino.Collections.Lists = Backbone.Collection.extend({
  url: "/api/lists",
  initialize: function(options) {
    this.board = options.board;
  },
  
  model: Trellino.Models.List,
  
  comparator: "rank"

});
