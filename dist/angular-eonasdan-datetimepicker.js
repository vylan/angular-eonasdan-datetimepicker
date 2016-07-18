(function () {
    'use strict';

    var module = angular.module('ae-datetimepicker', []);

    module.directive('datetimepicker', [
        '$timeout',
        function ($timeout) {
            return {
                restrict: 'EA',
                require: 'ngModel',
                scope: {
                    options: '=?',
                    onChange: '&?',
                    onClick: '&?'
                },
                link: function ($scope, $element, $attrs, ngModel) {

                    $scope.$watch('options', function (newValue) {
                        var dtp = $element.data('DateTimePicker');
                        $.map(newValue, function (value, key) {
                            dtp[key](value);
                        });
                    });

                    ngModel.$render = function () {
                        if (!!ngModel.$viewValue) {
                            $element.data('DateTimePicker').date(ngModel.$viewValue);
                        } else {
                            $element.data('DateTimePicker').date(null);
                        }
                    };

                    $element.on('dp.change', function (e) {
                        $timeout(function () {
                            if (!!e.date) {
                                $scope.$apply(function () {
                                    ngModel.$setViewValue(e.date);
                                });
                                if (typeof $scope.onChange === "function") {
                                    $scope.onChange();
                                }
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

                    $element.datetimepicker($scope.options);
                    $timeout(function () {
                        if (!!ngModel.$viewValue) {
                            if (!(ngModel.$viewValue instanceof moment)) {
                                ngModel.$setViewValue(moment($scope.date));
                            }
                            $element.data('DateTimePicker').date(ngModel.$viewValue);
                        }
                    });
                }
            };
        }
    ]);
})();