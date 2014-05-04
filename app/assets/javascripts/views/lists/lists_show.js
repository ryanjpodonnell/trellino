Trellino.Views.ListsShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
  
  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.model.cards(), "add", this.addCard);
    
    this.model.cards().each(this.addCard.bind(this));
  },
  
  addCard: function(cards) {
    debugger
		var cardsShowView = new Trellino.Views.CardsShow({
			model: cards
		});

    // this.addSubview(".cards-index", cardsShowView);
    // cardsShowView.render();
	},
  
  render: function () {
    var renderedContent = this.template({
      list: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});