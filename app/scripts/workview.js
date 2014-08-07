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
		$('.project-text').html('Mice On Main is a webapp that utilizes the HTML5 geolocation API to help visitors to Greenville's downtown find the mice sculptures hidden along Main Street.');
	},

	showGithubSummary: function(){
		$('.project-text').html('I rebuilt my GitHub profile page as a way to practice structuring my HTML, styling with CSS, and pulling data from public APIs.');
	},

	showDiceSummary: function(){
		$('.project-text').html('As part of a team project at the Iron Yard, we created a vitual dice roller that allows you to choose both the number of dice and the number of sides on each die.');
	},

	showEskimoSummary: function(){
		$('.project-text').html('The ETB is the only theatre in Berlin that presents plays exclusively in English; I illustrated this poster for the play Prophecy of a Nameless Eskimo.');
	},

	showChomaratSummary: function(){
		$('.project-text').html('The French textile company Chomarat needed help applying the brand identity created in France to the .');
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
	}

});