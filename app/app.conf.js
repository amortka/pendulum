'use strict';
console.log('test');

angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider) {
       $stateProvider
           .state('app', {
               url: '/',
               views: {
                   'header': {
                       template: '<page-header></page-header>'
                   },
                   'content': {
                       template: '<div>content</div>' //<div data-ui-view></div>
                   },
                   'footer': {
                       template: '<footer></footer>'
                   }
               }
           })

        $urlRouterProvider.otherwise("/");
    });