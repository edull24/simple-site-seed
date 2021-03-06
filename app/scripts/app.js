define(
[
    'jquery',
    'templates'
],
function($, templates) {

    'use strict';

    var api = {},

        dom = {},

        setupDom = function() {

            dom.document = $(document);
            dom.body = $('body');
            // Add more cached elements here.

        },

        initFoundation = function(args) {

            args = args || {};

            args.$target = args.$target || dom.document;

            args.options = args.options || {};

            args.$target.foundation(args.options);

        };

    api.init = function() {

        console.log('app.js init...');

        $(function() {

            setupDom();

            initFoundation();

            dom.body.prepend(templates.welcome({
                message: 'Congratulations! You are up and running!',
                url: 'https://github.com/edull24/simple-site-seed',
                name: 'View the repo'
            }));

        });

    };

    return api;

});
