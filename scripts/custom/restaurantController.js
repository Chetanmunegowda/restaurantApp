/**
 * Created by Chetan Munegowda on 6/10/2015.
 */
var resCtrl = angular.module('restaurantController',[])

resCtrl.controller('mainController', ['$scope', function(scope){

    scope.restName = 'Shiva Restaurant';
    scope.devName = 'Chetan Munegowda';
    scope.recipes = ["Upma", "Phulka/Rice with Rajama curry", "Phulka/Rice with Chole curru", "Vegetable Pulv", "Dal and Rice","Masala Dosa"];

}]);

resCtrl.controller('customerController', ['$scope', '$location', function (scope, location) {
    scope.pageClass = 'page-customer';

    scope.customer = {};

    scope.submitForm = function(isValid, customer, path){

        alert("hello");
        alert(isValid);
        alert(customer);

        if(isValid)
        {
            scope.customer = customer;
            console.log(scope.customer);
            location.path( path );
        }
    };


}]);


resCtrl.controller('bookingController', ['$scope', function (scope) {
    scope.pageClass = 'page-book';


    scope.submitForm =  function(isValid, bookingDetails){
        if(isValid){
            alert("hello");
            console.log(bookingDetails);
        }
    };
}]);


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


resCtrl.controller('bookingDetailsController',['$scope','$routeParams','bookingDetailsService', function(scope, routeParam, bookService){

    bookService.find(routeParam.custId, function(data){
        scope.customer = data;
    })

}]);


