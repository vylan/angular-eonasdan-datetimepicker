(function() {
  'use strict';

  var module = angular.module('ae-datetimepicker', []);

  module.directive('datetimepicker', [
      '$timeout',
      function($timeout) {
        return {
          require: '?ngModel',
          restrict: 'EA',
          scope: {
            options: '@',
            onChange: '&',
            onClick: '&'
          },
          link: function($scope, $element, $attrs, controller) {
            $element.on('dp.change', function() {
              $timeout(function() {
                var dtp = $element.data('DateTimePicker');
                controller.$setViewValue(dtp.date());
                $scope.onChange();
              });
            });

            $element.on('click', function() {
              $scope.onClick();
            });

            controller.$render = function() {
              if (!!controller && !!controller.$viewValue) {
                var result = controller.$viewValue;
                $element.data('DateTimePicker').date(result);
              }
            };

            $element.datetimepicker($scope.$eval($attrs.options));
          }
        };
      }
    ]);
})();