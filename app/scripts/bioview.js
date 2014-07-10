/* global _, Backbone */
'use strict';

// BIO VIEW //////////////////////////////////////////////////////////////
var BioView = Backbone.View.extend({
	className : 'bio',
	bioTemplate: _.template($('.bio-template').text()),

	events: {
		//
	},

	initialize: function(){
		//appends bio-view div with contents of the bio-template
		$('.bio-view').append(this.el);
		//calls the render function
		this.render();
	},

	render: function(){
		this.$el.html(this.bioTemplate);
		return this;
	}

});

console.log('bioview.js file loaded');