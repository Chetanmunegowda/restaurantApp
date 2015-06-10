/**
 * Created by Chetan Munegowda on 6/7/2015.
 */
var restApp = angular.module('restaurantApp', ['ngRoute','restaurantController','restDirective','restService']);

restApp.config(function ($routeProvider) {
    $routeProvider

        //route for the main page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        //route for customer page
        .when('/customer', {
            templateUrl: 'pages/customer.html',
            controller: 'customerController'
        })
        //route for owner page
        .when('/owner', {
            templateUrl: 'pages/owner.html',
            controller: 'ownerController'
        })
        //route for booking page
        .when('/book',{
            templateUrl:'pages/customerbooking.html',
            controller: 'bookingController'
        })
        //route for booking details page
        .when('/bookingDetails/:custId', {
            templateUrl: 'pages/customerBookingDetails.html',
            controller: 'bookingDetailsController'
        })
        //otherwise
        .otherwise({
             redirectTo: '/'
         });
});

