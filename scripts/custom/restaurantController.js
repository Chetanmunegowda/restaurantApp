/**
 * Created by Chetan Munegowda on 6/10/2015.
 */
var resCtrl = angular.module('restaurantController',[])

//main controller
resCtrl.controller('mainController', ['$scope', function(scope){

    scope.restName = 'Shiva Restaurant';
    scope.devName = 'Chetan Munegowda';
    scope.recipes = ["Upma", "Phulka/Rice with Rajama curry", "Phulka/Rice with Chole curry", "Vegetable Pulav", "Dal and Rice","Masala Dosa"];

}]);

//customer controller
resCtrl.controller('customerController', ['$scope', '$location', function (scope, location) {
    scope.pageClass = 'page-customer';

    scope.customer = {};

    scope.submitForm = function(isValid, customer, path){

        if(isValid)
        {
            scope.customer = customer;
            console.log(scope.customer);
            location.path( path );
        }
    };


}]);



//booking controller
resCtrl.controller('bookingController', ['$scope', function (scope) {
    scope.pageClass = 'page-book';


    scope.submitForm =  function(isValid, bookingDetails){
        if(isValid){
            alert("hello");
            console.log(bookingDetails);
        }
    };
}]);



//owner controller
resCtrl.controller('ownerController', ['$scope','$http','$log',function (scope,http,log) {
    scope.pageClass = 'page-owner';
    scope.customers = [];
    scope.btnHideflag = false;

    http.get('json/customer.json').success(function(data){

        scope.customers = data;
        console.log(scope.customers);

    });

    scope.showEmailList = function(){
        scope.showFlag = true;
        scope.btnHideflag = true;
    }

}]);


//booking details controller
resCtrl.controller('bookingDetailsController',['$scope','$routeParams','bookingDetailsService', function(scope, routeParam, bookService){

    bookService.find(routeParam.custId, function(data){
        scope.customer = data;
    })

}]);


