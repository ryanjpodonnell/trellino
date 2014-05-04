Trellino.Models.List = Backbone.Model.extend({
  cards: function () {
    if (!this._cards) {
      this._cards = new Trellino.Collections.Cards([], {
        list: this
      });
      this._cards.fetch();
    }
  
    return this._cards;
  },
  
  parse: function (jsonResp) {
    debugger
    if (jsonResp.cards) {
      this.cards().set(jsonResp.cards);
      delete jsonResp.cards;
    }

    return jsonResp;
  },
  
  toJSON: function () {
    debugger
		var json = Backbone.Model.prototype.toJSON.call(this);

		delete json.created_at;
		delete json.updated_at;

		return json;
	}
});
