Trellino.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards/:id": "boardsShow"
  },
  
  boardsIndex: function () {
    var indexView = new Trellino.Views.BoardsIndex({
      collection: Trellino.Collections.boards
    });

    Trellino.Collections.boards.fetch();
    this._swapView(indexView);
  },
  
  boardsShow: function (id) {
    var board = Trellino.Collections.boards.getOrFetch(id);
    
    var showView = new Trellino.Views.BoardsShow({
      model: board
    });

    this._swapView(showView);    
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;

    $("body").html(view.render().$el);
  }
});
