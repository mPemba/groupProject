angular.module('groupProject')
.directive('directive1', function() {
  return {
    scope: {}, 
    restrict: 'E',
    template: "<div>{{data.email}}</div>"
  };
});