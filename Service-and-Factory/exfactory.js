// declared the app with no dependencies

var app = angular.module('myApp', []);

/* I HAVE CREATED ONE SIMPLE FACTORY "data" HERE.
NOW, ANYTHING USER INPUTS IN THE INPUT BOX WILL BE RETRIEVED AND STORED IN THIS FACTORY.
WE CAN USE THIS DATA IN OUR DIFFERENT CONTROLLERS, USING THIS FACTORY*/

app.factory('Data', function(){
    return { FirstName: '' };
});

app.controller('FirstCtrl', function( $scope, Data ){
	$scope.Data = Data;
});

app.controller('SecondCtrl', function( $scope, Data ){
	$scope.Data = Data;
});
