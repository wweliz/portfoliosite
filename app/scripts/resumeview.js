/* global _, Backbone */
'use strict';

// RESUME VIEW ///////////////////////////////////////////////////////////
var ResumeView = Backbone.View.extend({

	resumeTemplate: _.template($('.resume-template').text()),

	events: {
		'click .software-btn'			: 'showSoftware',
		'click .development-btn'	: 'showDevelopment',
		'click .experience-btn'		: 'showExperience'
	},

	initialize: function(){
		//appends resume-view div with contents of the resume-template
		$('.resume-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.resumeTemplate);
		return this;
	},

	showSoftware: function(){
		$('.software').toggle('slow');
	},

	showDevelopment: function(){
		$('.development').toggle('slow');
	},

	showExperience: function(){
		$('.experience').toggle('slow');
	}

});

//////////////////////////////////////////////////////////////////////////
// HIDE TOGGLE DIVS ON PAGE LOAD /////////////////////////////////////////
$(document).ready(function() {
	$('.software').hide();
	$('.development').hide();
	$('.experience').hide();
	$('.education').hide();
});