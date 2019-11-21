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
    $scope.answer= "press enter or the button";
    $scope.arrayOfItems = [];
    $scope.submit = function(){
        if($scope.Num1 == null || $scope.Num2 == null)
        {
            $scope.answer = 0;
            var item = new Object;
            item.itemName=$scope.answer;
            $scope.arrayOfItems.push(item);
            
        }
        else
        {
            $scope.answer = $scope.Num1 * $scope.Num2
            var item = new Object;
            item.itemName=$scope.answer;
            $scope.arrayOfItems.push(item);
        }
    }
    $scope.enterPress = function(){
        if($scope.Num1 == null || $scope.Num2 == null)
        {
            $scope.answer = 0;
            var item = new Object;
            item.itemName=$scope.answer;
            $scope.arrayOfItems.push(item);
        }
        else
        {
            $scope.answer = $scope.Num1 * $scope.Num2
            var item = new Object;
            item.itemName=$scope.answer;
            $scope.arrayOfItems.push(item);
        }
    }
});


