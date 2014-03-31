'use strict';

angular.module('myApp')
  .directive('ngCheckbox', function() {

    var tpl = '<div id="{{name}}" class="ios-switch stop_anim_prop">' +
        '<strong>{{label}}</strong>' +
        '<input type="checkbox" class="ios-switch"' +
          'ng-model="target"' +
          'id="{{name}}" />' +
        '<div class="switch" ng-class="setCls()" ng-tap="setCheck()"><div></div></div>' +
      '</div>';

    return {
      template: tpl,
      replace: true,
      scope: {
        label: '@',
        target: '=',
        name: '@'
      },
      link: function(scope, element) {

        scope.setCheck = function() {
          return scope.target = !scope.target;
        };

        scope.setCls = function() {
          return scope.target ? 'checked' : 'unchecked';
        };

      }
    };

  });
