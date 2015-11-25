'use strict';

angular.module('services.swing', [])
    .factory('Swing', function ($http, API) {
        var url = API.path + '/swing';

        var state = null;

        var STATES = {
            'DOWN': 'down',
            'UP': 'up'
        };

        var up = function () {
            go(STATES.UP)
                .then(function (response) {
                    console.log('swinged UP!', response.data);
                    state = STATES.UP;
                })
        };

        var down = function () {
            go(STATES.DOWN).
                then(function (response) {
                    console.log('swinged DOWN!', response.data);
                    state = STATES.DOWN;
                })
        };

        var toggle = function() {
            var newState = state === STATES.UP ? STATES.DOWN : STATES.UP;
            go(newState).
                then(function (response) {
                    console.log('swinged', newState, response.data);
                    state = newState;
                })
        };

        var init = function () {
          state = 'down';
        };

        var checkState = function () {
            return state;
        };

        function go(direction) {
            return $http.get(url, {
                    params: {
                        direction: direction
                    }
                }
            )
        }

        return {
            down: down,
            checkState: checkState,
            init: init,
            toggle: toggle,
            up: up
        };
    });