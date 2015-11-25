'use strict';
angular.module('myApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                abstract: true,
                views: {
                    'header': {
                        template: '<page-header></page-header>'
                    },
                    'content': {
                        template: '<div data-ui-view></div>'
                    },
                    'footer': {
                        template: '<footer></footer>'
                    }
                }
            })
            .state('app.main', {
                url: '',
                templateUrl: 'pages/main/main.tmpl.html',
                controller: 'MainCtrl',
                controllerAs: 'mainCtrl'
            })

        $urlRouterProvider.otherwise("/");
    })
    .run(function (Swing) {
        Swing.init();
    });