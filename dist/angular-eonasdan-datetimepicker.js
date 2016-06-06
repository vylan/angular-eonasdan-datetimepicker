(function () {
    'use strict';

    var module = angular.module('ae-datetimepicker', []);

    module.directive('datetimepicker', [
        '$timeout',
        function ($timeout) {
            return {
                restrict: 'EA',
                scope: {
                    date: '=',
                    options: '=?',
                    onChange: '&?',
                    onClick: '&?'
                },
                link: function ($scope, $element) {

                    $scope.$watch('options', function (newValue) {
                        var dtp = $element.data('DateTimePicker');
                        $.map(newValue, function (value, key) {
                            dtp[key](value);
                        });
                    });

                    $element.on('dp.change', function () {
                        $timeout(function () {
                            var dtp = $element.data('DateTimePicker');
                            $scope.$apply(function () {
                                $scope.date = dtp.date();
                            });
                            if (typeof $scope.onChange === "function") {
                                $scope.onChange();
                            }
                        });
                    });

                    $element.on('click', function () {
                        $timeout(function () {
                            if (typeof $scope.onClick === "function") {
                                $scope.onClick();
                            }
                        });
                    });

                    if ($scope.date !== undefined && $scope.date !== null && !($scope.date instanceof moment)) {
                        $scope.date = moment($scope.date);
                    }

                    $element.datetimepicker($scope.options);
                    $element.data('DateTimePicker').date($scope.date);
                }
            };
        }
    ]);
})();