/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
		dist: {
			src: ['.tmp/public/frontend/concat/front-production.js'],
			dest: '.tmp/public/frontend/min/front-production.js'
		},
		distBack: {
			src: ['.tmp/public/backend/concat/back-production.js'],
			dest: '.tmp/public/backend/min/back-production.js'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
