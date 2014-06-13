Trellino.Collections.Lists = Backbone.Collection.extend({
  comparator: "rank",
  
  initialize: function(models, options) {
    this.board = options.board;
  },
  
  model: Trellino.Models.List,
  
  url: function() { 
    return '/api/boards/' + this.board.id + '/lists' 
  }
});