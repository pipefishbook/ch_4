var Backbone = require('backbone');

var ChoseView = Backbone.View.extend({

  template: '<h1>Welcome to Munich Cinema</h1>\
             <h2>Please choose a movie</h2>',
  className: 'details',
  render: function() {
    this.$el.html(this.template);
    return this;
  }
});
module.exports = ChoseView;
