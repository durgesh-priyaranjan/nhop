module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'compileAssets',
		'concat',
		'uglify',
		'cssmin',
		'sails-linker:prodJs',
		'sails-linker:prodBackJs',
		'sails-linker:prodStyles',
		'sails-linker:prodBackStyles',
		'sails-linker:devTpl',
		'sails-linker:devBackTpl'
	]);
};
