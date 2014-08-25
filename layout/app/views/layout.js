  var Backbone = require('backbone');
  Backbone.XView = require('backbone.xview');
  var _ = require('underscore');
  
  // import the moviesList
  var MoviesList = require('views/moviesList');
  var DetailsView = require('views/details');
  var ChoseView = require('views/chose');
  
  var Layout = Backbone.View.extend({

    template: _.template('           \
               <div id="overview">   \
               </div>                \
               <div id="details">    \
               </div>'),

    render: function() {
      this.$el.html(this.template());
      this.currentDetails.setElement(this.$('#details')).render();
      this.overview.setElement(this.$('#overview')).render();

      return this;
    },

    setDetails: function(movie) {
      if (this.currentDetails) this.currentDetails.remove();
      this.currentDetails = new DetailsView({model: movie});
      this.render();
    },

    setChose: function() {
      if (this.currentDetails) this.currentDetails.remove();
      this.currentDetails = new ChoseView();
      this.render();
    },

   showMain: function() {
          this.movies.resetSelected();
          this.layout.setChose();
    },
    
    initialize: function(options) {
      this.overview = new MoviesList({
        el: options.el,
        collection: options.collection,
        router: options.router
     });
     this.currentDetails = new ChoseView();

    }
 
  });

  var instance;
  Layout.getInstance = function(options) {
    if (!instance) {
      instance = new Layout({
        el: options.el,
        router: options.router,
        collection: options.router.movies
      });
    }
    return instance;
  }
  module.exports = Layout;
