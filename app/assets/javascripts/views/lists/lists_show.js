Trellino.Views.ListsShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
  
  events: {
		'click .toggle-card, .cancel-card': 'toggleCard',
		'click .create-card'              : 'createCard',
    'click .well'                     : 'showCard'
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.render);
    
    this.collection.each(this.addCard.bind(this));
  },
  
  addCard: function (card) {
    var cardsShowView = new Trellino.Views.CardsShow({
      model: card
    });
    
    this.addSubview(".card-show-" + card.id.toString(), cardsShowView);
    cardsShowView.render();
  },
  
  render: function () {
    var renderedContent = this.template({
      list: this.model
    });

    this.$el.html(renderedContent);
    this.renderSubviews();

    return this;
  },
  
  toggleCard: function (event) {
		event.preventDefault();
    
    var listId = parseInt($(event.target).parent().attr("data-id"));
    var $list = $(event.target).parent();
    
    $list.find('#card-title').val('');
    $(event.target).parent().find('.new-card').toggle();
	},
  
  createCard: function (event) {
    event.preventDefault();
    
    var listId = parseInt($(event.target).parent().attr("data-id"));
    var $list = $(event.target).parent();
    var listTitle = $list.find('#card-title').val();
    var params = {title: listTitle, rank: 0, list_id: listId};
		this.collection.create(params, { wait: true });
    
    $list.find('#card-title').val('');
	},
  
  showCard: function (event) {
    event.preventDefault();
    
    $('#myModal69').modal('show');
  }
});