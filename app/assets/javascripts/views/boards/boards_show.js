Trellino.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
  events: {
		'click .toggle-form, .cancel-card': 'toggleCard',
		'click .create-card': 'createCard'
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.model.lists(), "add", this.addList);
    
    this.model.lists().each(this.addList.bind(this));
    $('body').css('background-color', '#23719f');
  },
  
  addList: function (list) {
    var listsShowView = new Trellino.Views.ListsShow({
      model: list
    });
    
    this.addSubview(".list-show", listsShowView);
    listsShowView.render();
  },
  
  render: function () {
    var renderedContent = this.template({
      board: this.model
    });

    this.$el.html(renderedContent);
    this.renderSubviews();

    return this;
  },
  
  toggleCard: function (event) {
		event.preventDefault();
		$(event.target).parent().find('.new-card').toggle();
	},
  
  createCard: function (event) {
    event.preventDefault();
    
    var params = {title: $('#card-title').val()}
		this.collection.create(params, { wait: true });
		Backbone.history.navigate("", { trigger: true });
	}
});