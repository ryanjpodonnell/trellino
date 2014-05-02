Trellino.Models.List = Backbone.Model.extend({
  cards: function () {
    debugger
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
  }
});
