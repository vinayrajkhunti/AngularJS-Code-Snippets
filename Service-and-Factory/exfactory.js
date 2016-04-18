// declared the app with no dependencies
// I HAVE INCLUDED HTML CODE AT THE END OF THIS CODE, JUST FOR REFERENCE PURPOSE.
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

// HTML CODE

/* 
<body>
	<div>

		<div ng-controller="FirstCtrl">
			<input type="text" ng-model="Data.FirstName"><!-- Input entered here -->
			<br>Firstname is : <strong>{{Data.FirstName}}</strong><!-- Successfully updates here -->
		</div>
		<div ng-controller="SecondCtrl">
			Firstname Again: {{Data.FirstName}}<!-- It is automatically updated here. -->
		</div>

	</div>
</body>
*/
