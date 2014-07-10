/* global _, Backbone */
'use strict';

// RESUME VIEW ///////////////////////////////////////////////////////////
var ResumeView = Backbone.View.extend({

	resumeTemplate: _.template($('.resume-template').text()),

	events: {
		//
	},

	initialize: function(){
		//appends resume-view div with contents of the resume-template
		$('.resume-view').append(this.el);
		//calls the render function
		this.render();
	},

	render: function(){
		this.$el.html(this.resumeTemplate);
		return this;
	}

});