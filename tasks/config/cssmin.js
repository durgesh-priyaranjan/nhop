/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

	grunt.config.set('cssmin', {
		dist: {
			src: ['.tmp/public/frontend/concat/front-production.css'],
			dest: '.tmp/public/frontend/min/front-production.css'
		},
		distBack: {
			src: ['.tmp/public/backend/concat/back-production.css'],
			dest: '.tmp/public/backend/min/back-production.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
