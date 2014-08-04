/* global _, Backbone */
'use strict';

// RESUME VIEW ///////////////////////////////////////////////////////////
var ResumeView = Backbone.View.extend({

	resumeTemplate: _.template($('.resume-template').text()),

	events: {
		'click .show-resume-btn'	: 'showResume',
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
		$('.sub-content-left').hide();
		$('.sub-content-right').hide();
	},

	showResume: function(){
		console.log('hide initial button clicked');
		$('.initial-content').remove();
		$('.sub-content-left').toggle('slow');
		$('.sub-content-right').toggle('slow');
	}

});