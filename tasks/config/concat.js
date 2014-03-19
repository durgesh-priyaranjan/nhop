/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		js: {
			src: require('../pipeline').jsFilesToInject,
			dest: '.tmp/public/frontend/concat/front-production.js'
		},
		jsBack: {
			src: require('../pipeline').jsBackFilesToInject,
			dest: '.tmp/public/backend/concat/back-production.js'
		},
		css: {
			src: require('../pipeline').cssFilesToInject,
			dest: '.tmp/public/frontend/concat/front-production.css'
		},
		cssBack: {
			src: require('../pipeline').cssBackFilesToInject,
			dest: '.tmp/public/backend/concat/back-production.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
