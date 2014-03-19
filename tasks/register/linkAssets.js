module.exports = function (grunt) {
	grunt.registerTask('linkAssets', [
		'sails-linker:devJs',
		'sails-linker:devBackJs',
		'sails-linker:devStyles',
		'sails-linker:devBackStyles',
		'sails-linker:devTpl',
		'sails-linker:devBackTpl'
	]);
};
