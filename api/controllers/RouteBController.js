/**
 * RouteBController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    index: function index(req, res, next) {

        // If authenticated, render the admin landing page
        if (req.isAuthenticated()) {
            res.view('backend/pages/homepage', {
                layout: 'backend/layout',
                bodyClass: "admin-homepage"
            });
        } else {
            // If not authenticated, render the login/signup page.
            res.view('backend/pages/credentials', {
                layout: 'backend/layout',
                bodyClass: "admin-credentails bg-black"
            });
        }
    }
};