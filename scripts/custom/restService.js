/**
 * Created by Chetan Munegowda on 6/10/2015.
 */
var restService  = angular.module('restService',[]);

restService.factory('bookingDetailsService',['$http', function(http){

    return {
        find : function(custId, callback){
            http({
                method: 'GET',
                url : 'json/custBookDetails_'+custId+'.json',
                cache: true
            }).success(callback);
        }
    }

}]);
