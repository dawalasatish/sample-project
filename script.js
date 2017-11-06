var app = angular.module('myApp',[]);
app.controller('myCtrl', ['$scope', function($scope){

	$scope.firstname = "satish kumar";
	$scope.tablets = ["Ipad","Samsung","Dell","Asus","Lenovo"];
	$scope.smarts = ["Iphone","Samsung","Redmi","Moto","Lenovo"];
	$scope.tablet = $scope.tablets[0];
	$scope.smart = $scope.smarts[0];
	
}])