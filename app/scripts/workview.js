/* global _, Backbone */
'use strict';

// WORK VIEW /////////////////////////////////////////////////////////////
var WorkView = Backbone.View.extend({

	className : 'project-target',
	workTemplate: _.template($('.work-template').text()),

	events: {
		//
	},

	initialize: function(){
		//appends work-view div with contents of the work-template
		$('.work-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.workTemplate);
		return this;
	}

});