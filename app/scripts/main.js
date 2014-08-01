/* global Backbone */
'use strict';

// PROJECT MODEL /////////////////////////////////////////////////////////
var Project = Backbone.Model.extend({
	idAttribute: '_id',
	defaults: {
		id:			'',
		image:	'',
		title:	'',
		text:		'',
		links:	''
	}
});

// PROJECT COLLECTION ////////////////////////////////////////////////////
var projectCollection = Backbone.Collection.extend({
    model: Project
});

// PROJECT ARRAY /////////////////////////////////////////////////////////
var projectArray = [
	{
		id:			'miceonmain',
		image:	'http://placehold.it/350x150',
		title:	'Mice On Main: The App',
		text:		'Short description about mice.',
		links:	'View the project live <a href="###">here</a>, or check out my code on <a href="###">GitHub</a>.'
	},

	{
		id:			'githubrebuild',
		image:	'../images/github-rebuild-front.png',
		title:	'Github Profile Rebuild',
		text:		'Short description.',
		links:	'View the project live <a href="###">here</a>, or check out my code on <a href="###">GitHub</a>.'
	},

	{
		id:			'rolldice',
		image:	'../images/dice-front.png',
		title:	'Roll The Dice',
		text:		'Short description.',
		links:	'View the project live <a href="###">here</a>, or check out my code on <a href="###">GitHub</a>.'
	},

	{
		id:			'eskimo',
		image:	'../images/eskimo-front.png',
		title:	'English Theatre Berlin Playbill',
		text:		'Short description.',
		links:	'View the project live <a href="###">here</a>, or check out my code on <a href="###">GitHub</a>.'
	},

	{
		id:			'chomarat',
		image:	'../images/chomarat-front.png',
		title:	'Chomarat Rebrand',
		text:		'Short description.',
		links:	'View the project live <a href="###">here</a>, or check out my code on <a href="###">GitHub</a>.'
	},

	{
		id:			'hoowaki',
		image:	'../images/hoowaki-front.png',
		title:	'Hoowaki Brand Development',
		text:		'Short description.',
		links:	'View the project live <a href="###">here</a>, or check out my code on <a href="###">GitHub</a>.'
	},

	{
		id:			'photography',
		image:	'../images/old-barn-front.png',
		title:	'Photography',
		text:		'Short description.',
		links:	'View the project live <a href="###">here</a>, or check out my code on <a href="###">GitHub</a>.'
	},
	
	{
		id:			'fluor',
		image:	'../images/tss-front.png',
		title:	'Fluor Government Group Cutsheet',
		text:		'Short description.',
		links:	'View the project live <a href="###">here</a>, or check out my code on <a href="###">GitHub</a>.'
	},
	
	{
		id:			'scansource',
		image:	'../images/scansource-front.png',
		title:	'ScanSource Marketing Rate Card',
		text:		'Short description.',
		links:	'View the project live <a href="###">here</a>, or check out my code on <a href="###">GitHub</a>.'
	}
];

// PROJECT MODEL /////////////////////////////////////////////////////////

// var projects = new projectCollection(projectArray);

//creates a new collection instance
var projects = new projectCollection();
//eaches over the collection instance
projects.each(function(projectArray){
	//creates a new view using the Project model
	new ProjectView({model:Project});
});