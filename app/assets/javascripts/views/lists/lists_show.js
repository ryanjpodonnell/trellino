Trellino.Views.ListsShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.model.cards(), "add", this.addCard);
    
    this.model.cards().each(this.addCard.bind(this));
  },
  
  addCard: function(cards) {
		var cardsShowView = new Trellino.Views.CardsShow({
			model: cards
		});

    this.addSubview(".cards-show", cardsShowView);
	},
  
  render: function () {
    var renderedContent = this.template({
      list: this.model
    });

    this.$el.html(renderedContent);
    this.renderSubviews();

    return this;
  }
});