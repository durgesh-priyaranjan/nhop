/**
 * TemplateBController
 *
 * @module      :: 	Controller
 * @description	:: 	A controller to render templates for backend / admin panel.
 *					-> bt: Backend Template
 *					-> Routes should be as: /bt/:templateName
 *					-> Return the template present in views/backend/template
 *					-> But only when user[admin] is authenticated
 */

var fs = require('fs'),
	CONFIG = require("config");

module.exports = {
	_config: {},

	index: function index(req, res, next) {

		// Check if requested template is present
		fs.exists(CONFIG.backend_template_path, function(exists) {
			if (exists) {

				// If exists, render it without layout
				res.view(CONFIG.backend_template_path + req.params.templateName, {
					layout: false
				})
			} else {

				// If not present, send 404
				res.status(404).render("backend/404");
			}
		});
	}
};