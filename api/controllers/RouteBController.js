/**
 * RouteBController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
	index: function index(req, res, next) {

        // If authenticated, render the admin landing page
        if ( req.isAuthenticated() ){


        } else {
        // If not authenticated, render the login/signup page.

        }
    }
};
