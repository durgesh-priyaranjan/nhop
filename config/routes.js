/**
 * Routes
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {

	/*
	Front-end routing
  */


	/*
	Backend Routing [Views]
	-> All the view routes will be handled by  angular js.
	-> So, just 2 views will be rendered from server
	-> 1) Credential page, which included signin, login (If any admin is present) else
		  sigup view (If no admin is present in DB)
	-> 2) Admin Home page (with nav, header and footer only)
  */

	// Template router [returns template to angular js.]
	"/bt/:templateName": "TemplateBController",

	"/adv": "RouteBController",
	"/admin": "RouteBController",

	/*
	Any unhandled view route, to be handled by angular js, so just send the basic page
	depending on authentication status of user.
   */
	"/adv/:param_first?/:param_second?/:param_third?/:param_fourth?": "RouteBController",

	/*
	Backend Routing [Functionalities]
   */
	'post ad/login': {
		controller: 'AuthController',
		action: 'login'
	},
	'get ad/logout': {
		controller: 'AuthController',
		action: 'logout'
	},
	/** Create the route to handle user activations */
	'get ad/user/:id/activate/:token': {
		controller: 'UserController',
		action: 'activate'
	}

};