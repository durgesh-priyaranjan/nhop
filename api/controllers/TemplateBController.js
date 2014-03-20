/**
 * TemplateBController
 *
 * @module      :: 	Controller
 * @description	:: 	A controller to render templates for backend / admin panel.
 *					-> bt: Backend Template
 *					-> Routes should be as: /bt/:templateName
 *					-> Return the template present in views/backend/template
 *					-> But only when user[admin] is authenticated
 *					-> If xhr request is made for template, return content of template
 *					-> If normal get request is made for template, return it with layout.
 */

var btPath = "backend/templates/";

module.exports = {
	_config: {},

	index: function index(req, res, next) {
		res.render(btPath + req.params.templateName, function(err, data) {
			if (err) {
				res.status(404).render("backend/404");
			} else {
				res.end();
			}
		});
	}
};