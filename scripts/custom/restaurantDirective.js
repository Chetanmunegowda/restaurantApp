/**
 * Created by Chetan Munegowda on 6/10/2015.
 */
var restDirective = angular.module('restDirective',[])

restDirective.directive('restaurantNavigation', function () {
    return {
        restrict: 'EA',
        templateUrl: 'directive/restAppNavigation.html'
    }
});


restDirective.directive('customerEmailList', function() {
    return {
        restrict: 'E',
        templateUrl: 'directive/customerList.html'
    }
});
