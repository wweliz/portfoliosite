/* global _, Backbone */
'use strict';

// PROJECT VIEW //////////////////////////////////////////////////////////
var ProjectView = Backbone.View.extend({

	workTemplate: _.template($('.project-template').text()),

	events: {
		//
	},

	initialize: function(){
		//appends project-view div with contents of the project-template
		$('.project-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.workTemplate);
		return this;
	}

});