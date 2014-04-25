Trellino.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    
    // this.model.lists().each(this.addList.bind(this));

    var listNewView = new Trellino.Views.ListsNew({
      board: this.model
    });
    this.addSubview(".list-new", listNewView);
  },
  
  addList: function (list) {
    // var commentsShowView = new Todo.Views.CommentsShow({
    //   model: comment
    // });
    // 
    // this.addSubview(".comments", commentsShowView);
    // commentsShowView.render();
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