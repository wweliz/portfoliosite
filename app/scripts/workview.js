/* global _, Backbone */
'use strict';

// WORK VIEW /////////////////////////////////////////////////////////////
var WorkView = Backbone.View.extend({

	className : 'project-target',
	workTemplate: _.template($('.work-template').text()),

	events: {
		'mouseover #miceonmain'			: 'showMiceSummary',
		'mouseover #githubrebuild'	: 'showGithubSummary',
		'mouseover #rolldice'				: 'showDiceSummary',
		'mouseover #eskimo'					: 'showEskimoSummary',
		'mouseover #chomarat'				: 'showChomaratSummary',
		'mouseover #hoowaki'				: 'showHoowakiSummary',
		'mouseover #photography'		: 'showPhotoSummary',
		'mouseover #fluor'					: 'showFluorSummary',
		'mouseover #scansource'			: 'showScanSourceSummary',
	},

	initialize: function(){
		//appends work-view div with contents of the work-template
		$('.work-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.workTemplate);
		return this;
	},

	showMiceSummary: function(){
		$('.project-text').html('Short description about mice.');
	},

	showGithubSummary: function(){
		$('.project-text').html('Short description about github.');
	},

	showDiceSummary: function(){
		$('.project-text').html('Short description about dice.');
	},

	showEskimoSummary: function(){
		$('.project-text').html('Short description about eskimo.');
	},

	showChomaratSummary: function(){
		$('.project-text').html('Short description about chomarat.');
	},

	showHoowakiSummary: function(){
		$('.project-text').html('Short description about hoowaki.');
	},

	showPhotoSummary: function(){
		$('.project-text').html('Short description about photos.');
	},

	showFluorSummary: function(){
		$('.project-text').html('Short description about fluor.');
	},

	showScanSourceSummary: function(){
		$('.project-text').html('Short description about scansource.');
	},	

	showProjectSummary: function(projectText){
		$('.project-text').html(projectText);
	}

});