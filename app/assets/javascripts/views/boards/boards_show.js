Trellino.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.model.lists(), "add", this.addList);
    
    this.model.lists().each(this.addList.bind(this));

    // var listNewView = new Trellino.Views.ListsNew({
    //   board: this.model
    // });
    // this.addSubview(".list-new", listNewView);
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