'use strict';

// WORK VIEW /////////////////////////////////////////////////////////////
var WorkView = Backbone.View.extend({

	workTemplate: _.template($('.work-template').text()),

	events: {
		//
	},

	initialize: function(){
		//appends work-view div with contents of the work-template
		$('.work-view').append(this.el);
		//calls the render function
		this.render();
	},

	render: function(){
		this.$el.html(this.workTemplate);
		return this;
	}

});

console.log('workview.js file loaded');