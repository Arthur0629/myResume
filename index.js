var app = angular.module("app", []);

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

app.controller("appCtrl", function($scope) {  
    $scope.message="Calculator";
    $scope.try= "";
    $scope.submit = function(){
        if($scope.Num1 == null || $scope.Num2 == null)
        {
            $scope.try = 0;
        }
        else
        {
            $scope.try = $scope.Num1 * $scope.Num2
        }
    }
    $scope.enterPress = function(){
        if($scope.Num1 == null || $scope.Num2 == null)
        {
            $scope.try = 0;
        }
        else
        {
            $scope.try = $scope.Num1 * $scope.Num2
        }
    }
});


