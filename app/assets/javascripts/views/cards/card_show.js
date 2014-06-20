Trellino.Views.CardsShow = Backbone.View.extend({
  template: JST['cards/show'],
  
  events: {
    'click .delete-card'              : 'deleteCard',
    'click .toggle-desc, .cancel-desc': 'toggleDesc',
    'click .create-desc'              : 'createDesc'
  },
  
  initialize: function () {
  },
  
  render: function () {
    var renderedContent = this.template({
      card: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },
  
  toggleDesc: function (event) {
    event.preventDefault();
    
    $(event.currentTarget).parent().find('.new-desc').toggle();
  },
  
  createDesc: function (event) {
    event.preventDefault();
    
    var description = $(event.target).parent().find('#card-description').val();
    this.model.set({description: description});
    this.model.save();
    
    $(event.currentTarget).parent().find('.new-desc').toggle();
    $(event.currentTarget).parent().find('a').text(description);
  },
  
  deleteCard: function (event) {
    event.preventDefault();
    
    $('#cardModal' + this.model.id.toString()).modal('hide');
		
    this.model.destroy();
    this.collection.remove(this.model);
  }
});