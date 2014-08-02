/* global _, Backbone */
'use strict';

// RESUME VIEW ///////////////////////////////////////////////////////////
var ResumeView = Backbone.View.extend({

	resumeTemplate: _.template($('.resume-template').text()),

	events: {
		'click .hide-initial-btn'			: 'hideInitial',
		// 'click .software-btn'			: 'showSoftware',
		// 'click .development-btn'	: 'showDevelopment',
		// 'click .experience-btn'		: 'showExperience',
		// 'click .education-btn'		: 'showEducation'
	},

	initialize: function(){
		//appends resume-view div with contents of the resume-template
		$('.resume-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.resumeTemplate);
		this.showInitial();
		return this;
	},

	showInitial: function(){
		$('.software').hide();
		$('.development').hide();
		$('.experience').hide();
		$('.education').hide();
	},

	hideInitial: function(){
		console.log('hide initial button clicked');
		// $('.initial-content').remove();
		// $('.software').show();
		// $('.development').show();
		// $('.experience').show();
		// $('.education').show();
	// },
	// showSoftware: function(){
	// 	$('.initial-content').hide();
	// 	$('.software').toggle('slow');
	// },

	// showDevelopment: function(){
	// 	$('.initial-content').hide();
	// 	$('.development').toggle('slow');
	// },

	// showExperience: function(){
	// 	$('.initial-content').hide();
	// 	$('.experience').toggle('slow');
	// },

	// showEducation: function(){
	// 	$('.initial-content').hide();
	// 	$('.education').toggle('slow');
	}

});