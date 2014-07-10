'use strict';

// THE APP ROUTER ////////////////////////////////////////////////////////
var AppRouter = Backbone.Router.extend({
	routes: {
		//URL to match		//function called when the hash matches
		''					: 'renderBioView',				//	url/#
		'bio'				: 'renderBioView',				//	url/#bio
		'resume'		: 'renderResumeView',			//	url/#resume
		'work'			: 'renderWorkView',				//	url/#work
	},

	initialize: function(){
		this.renderBioView();
	},

  renderBioView: function(){
		new BioView();
  },

  renderResumeView: function(){
  	new ResumeView();
  },

  renderWorkView: function(){
  	new WorkView();
  }

});

//instantiate the router
// var router = new AppRouter;
// Backbone.history.start();

console.log('router.js file loaded');