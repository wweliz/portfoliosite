/* global Backbone */
'use strict';

// THE APP ROUTER ////////////////////////////////////////////////////////
var AppRouter = Backbone.Router.extend({
	routes: {
		//URL to match	//function called when the hash matches
		''							: 'renderBioView',				//	url/#
		'resume'				: 'renderResumeView',			//	url/#resume
		'portfolio'			: 'renderWorkView',				//	url/#portfolio
		'work/:id'			: 'renderProjectView',		//	url/#portfolio/projectid
		'project'				: 'renderPV',		
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

  renderPV: function(){
  	this.swap( new ProjectView() );
  },

  renderProjectView: function(id){
  	// var project = projectCollection.find(id);
  	// this.swap( new ProjectView( {model: projectArray} ) );

  	//var projects = new projectCollection(projectArray);
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