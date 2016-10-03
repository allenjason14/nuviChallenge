angular.module("myApp").service("mainService", function($http){

  this.getData = function() {
      return $http({
      method: "GET",
      url: "https://nuvi-challenge.herokuapp.com/activities"
      }).then(function(response) {
      console.log(response);
      return response;
    });
  };
});
