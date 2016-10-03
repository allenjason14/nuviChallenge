angular.module("myApp").controller("mainCtrl", function($scope, mainService){

  $scope.getData = function(){
    mainService.getData($scope.id).then(function(response){
        console.log("IT'S ALIVE!!!");
        console.log(response);
        $scope.retData = response.data;
        for (var i = 0; i < $scope.retData.length; i ++){
          $scope.retData[i].isVisible = false;
          $scope.retData[i].comment = [];
          $scope.retData[i].canLike = true;
          $scope.retData[i].commentBox = false;
        }
    })
  };

  $scope.getData();

  $scope.toggleVisibility = function(num){
    if($scope.retData[num].isVisible === false) {
      console.log(num);
      console.log($scope.retData);
      console.log($scope.retData[num].isVisible);
      $scope.retData[num].isVisible = !$scope.retData[num].isVisible;
    }
  }

  $scope.toggleInvisibility = function(num) {
    if($scope.retData[num].isVisible === true) {
      console.log(num);
      console.log($scope.retData);
      console.log($scope.retData[num].isVisible);
      $scope.retData[num].isVisible = !$scope.retData[num].isVisible;
    }

  }


  $scope.openCommentBox = function(num){
    console.log("Comment Box");
    $scope.retData[num].commentBox = true;
  }

  $scope.closeCommentBox = function(num) {
    $scope.retData[num].commentBox = false;
  }

  $scope.addComment = function(num, comment){
    $scope.retData[num].comment.push(comment);
    $scope.retData[num].activity_comments += 1;
    $scope.retData[num].newComment = "";
    $scope.retData[num].commentBox = false;
  }

  $scope.addLike = function(num){
    if( $scope.retData[num].canLike === true) {
      $scope.retData[num].activity_likes += 1;
      $scope.retData[num].canLike = false;
    }
    else {
      console.log("Cannot Like Twice");
    }

  }

});
