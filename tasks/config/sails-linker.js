/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */

module.exports = function(grunt) {

	grunt.config.set('sails-linker', {
		devJs: {
			options: {
				startTag: '<!--SCRIPTS FRONT-->',
				endTag: '<!--SCRIPTS FRONT END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/frontend/**/*.html': require('../pipeline').jsFilesToInject,
				'views/frontend/**/*.html': require('../pipeline').jsFilesToInject,
				'views/frontend/**/*.ejs': require('../pipeline').jsFilesToInject
			}
		},
		devBackJs: {
			options: {
				startTag: '<!--SCRIPTS BACK-->',
				endTag: '<!--SCRIPTS BACK END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/backend/**/*.html': require('../pipeline').jsBackFilesToInject,
				'views/backend/**/*.html': require('../pipeline').jsBackFilesToInject,
				'views/backend/**/*.ejs': require('../pipeline').jsBackFilesToInject
			}
		},

		prodJs: {
			options: {
				startTag: '<!--SCRIPTS FRONT-->',
				endTag: '<!--SCRIPTS FRONT END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/frontend/**/*.html': ['.tmp/public/frontend/min/front-production.js'],
				'views/frontend/**/*.html': ['.tmp/public/frontend/min/front-production.js'],
				'views/frontend/**/*.ejs': ['.tmp/public/frontend/min/front-production.js']
			}
		},
		prodBackJs: {
			options: {
				startTag: '<!--SCRIPTS BACK-->',
				endTag: '<!--SCRIPTS BACK END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/backend/**/*.html': ['.tmp/public/backend/min/back-production.js'],
				'views/backend/**/*.html': ['.tmp/public/backend/min/back-production.js'],
				'views/backend/**/*.ejs': ['.tmp/public/backend/min/back-production.js']
			}
		},

		devStyles: {
			options: {
				startTag: '<!--STYLES FRONT-->',
				endTag: '<!--STYLES FRONT END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.ejs': require('../pipeline').cssFilesToInject
			}
		},
		devBackStyles: {
			options: {
				startTag: '<!--STYLES BACK-->',
				endTag: '<!--STYLES BACK END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'.tmp/public/backend/**/*.html': require('../pipeline').cssBackFilesToInject,
				'views/backend/**/*.html': require('../pipeline').cssBackFilesToInject,
				'views/backend/**/*.ejs': require('../pipeline').cssBackFilesToInject
			}
		},

		prodStyles: {
			options: {
				startTag: '<!--STYLES FRONT-->',
				endTag: '<!--STYLES FRONT END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/frontend/index.html': ['.tmp/public/frontend/min/front-production.css'],
				'views/frontend/**/*.html': ['.tmp/public/frontend/min/front-production.css'],
				'views/frontend/**/*.ejs': ['.tmp/public/frontend/min/front-production.css']
			}
		},
		prodBackStyles: {
			options: {
				startTag: '<!--STYLES BACK-->',
				endTag: '<!--STYLES BACK END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/backend/index.html': ['.tmp/public/backend/min/back-production.css'],
				'views/backend/**/*.html': ['.tmp/public/backend/min/back-production.css'],
				'views/backend/**/*.ejs': ['.tmp/public/backend/min/back-production.css']
			}
		},

		// Bring in JST template object
		devTpl: {
			options: {
				startTag: '<!--TEMPLATES FRONT-->',
				endTag: '<!--TEMPLATES FRONT END-->',
				fileTmpl: '<script type="text/javascript" src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/frontend/jst.js'],
				'views/**/*.html': ['.tmp/public/frontend/jst.js'],
				'views/**/*.ejs': ['.tmp/public/frontend/jst.js']
			}
		},
		devBackTpl: {
			options: {
				startTag: '<!--TEMPLATES BACK-->',
				endTag: '<!--TEMPLATES BACK END-->',
				fileTmpl: '<script type="text/javascript" src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/backend/jst.js'],
				'views/**/*.html': ['.tmp/public/backend/jst.js'],
				'views/**/*.ejs': ['.tmp/public/backend/jst.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sails-linker');
};
