Trellino.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
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
    
    this.addSubview(".lists", listsShowView);
    listsShowView.render();
  },
  
  render: function () {
    var renderedContent = this.template({
      board: this.model
    });

    this.$el.html(renderedContent);
    this.renderSubviews();

    return this;
  }
});