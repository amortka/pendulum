'use strict';

angular.module('main', [])
    .controller('MainCtrl', function (Swing) {
        var vm = this;

        vm.goUp = function () {
             Swing.up();
        };

        vm.goDown = function () {
            Swing.down();
        };

        vm.checkState = function() {
            Swing.checkState()
        };

        vm.toggle = function () {
            Swing.toggle();
        }

    });