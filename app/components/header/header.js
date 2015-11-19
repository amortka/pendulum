'use strict';

angular.module('components.pageHeader', [])

    .directive('pageHeader', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/header/header.tmpl.html',
            controller: 'PageHeaderCtrl',
            controllerAs: 'pageHeaderCtrl'
        };
    });