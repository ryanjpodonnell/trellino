Trellino.Models.Board = Backbone.Model.extend({
  lists: function () {
    if (!this._lists) {
      this._lists = new Trellino.Collections.Lists([], {
        board: this
      });
    }
  
    return this._lists;
  },
  
  parse: function (jsonResp) {    
    var board = this;
    
		_(jsonResp.lists).each(function(list) {
			var newList = new Trellino.Models.List();
			newList.cards().set(list.cards);
			delete list.cards;
			newList.set(list);
			board.lists().add(newList);
		});

		delete jsonResp.lists;
		return jsonResp;
  }
});