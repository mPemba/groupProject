      .directive('appClick', function(){
          return {
            restrict: 'A',
            scope: true,
            template: '<button ng-click="click()">Click me</button> Clicked {{clicked}} times',
            controller: function($scope, $element){
              $scope.clicked = 0;
              $scope.click = function(){
                $scope.clicked++
              }
            }
          }
        });