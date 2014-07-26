/* global Backbone */
'use strict';

// THE APP ROUTER ////////////////////////////////////////////////////////
var AppRouter = Backbone.Router.extend({
	routes: {
		//URL to match	//function called when the hash matches
		''							: 'renderBioView',				//	url/#
		'bio'						: 'renderBioView',				//	url/#bio
		'resume'				: 'renderResumeView',			//	url/#resume
		'work'					: 'renderWorkView',				//	url/#work
	},

	initialize: function(){
		this.currentView = null;
	},

  renderBioView: function(){
  	this.swap( new BioView() );
  },

  renderResumeView: function(){
  	this.swap( new ResumeView() );
  },

  renderWorkView: function(){
  	this.swap( new WorkView() );
  },

  swap: function(view){
    if (this.currentView) this.currentView.remove();
    this.currentView = view;
    this.currentView.render();
  }

});

//instantiate the router
new AppRouter();
Backbone.history.start();