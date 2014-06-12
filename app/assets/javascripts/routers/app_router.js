Trellino.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards/:id": "boardsShow"
  },
  
  initialize: function(options) {
		this.$rootEl = options.$rootEl
	},
  
  boardsIndex: function () {
    var indexView = new Trellino.Views.BoardsIndex({
      collection: Trellino.Collections.boards
    });
    
    this._swapView(indexView);
  },
  
  boardsShow: function (id) {
    var board = Trellino.Collections.boards.getOrFetch(id);
    
    var showView = new Trellino.Views.BoardsShow({
      model: board,
      collection: board.lists()
    });

    this._swapView(showView);    
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    
    this.$rootEl.html(view.render().$el);
  }
});
