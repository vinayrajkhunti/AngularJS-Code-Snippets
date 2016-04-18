
/*THIS CODE SNIPPET DEMONSTRATES THE USE OF ANGULARJS SERVICE FEATURE. HERE, I HAVE DEVELOPED ONE SERVICE 'myService'. 
THE DATA, WE RETRIEVE FROM "data.json" FILE WILL BE STORED IN "$scope.listpeople" OBJECT. NOW, WHEN THE "popupbox()" FUNCTION WILL
BE CALLED, THE DATA FROM "$scope.listpeople" WILL BE STORED IN THE OBJECT 'y' CREATED IN SERVICE 'myService' 
NOTE: i am retrieving data according their index number. In this code, it is specified by $scope.listpeople[ind] 
NOW, WE CAN USE THIS DATA STORED IN SERVICE OBJECT 'myService.y' inside our another controller that is "replyCtrl".
AS WE CAN SEE HERE, I HAVE STORED THAT DATA IN "$scope.z" variable.
NOW, I CAN USE THIS DATA WHEREVER I WANT ON "reply.html" PAGE.*/


var app = angular.module('myApp',['ui.router']);

app.controller('barCtrl', function($scope,$http,$state,myService){
	$scope.listpeople = [];

	$http.get('data.json')
		.success(function(resp){
			$scope.listpeople = resp;
			console.log($scope.listbar);
		});
	$scope.popupbox = function(ind){
		myService.y=$scope.listpeople[ind];
		$state.go('reply',{'id':ind});
	}
});
app.controller('replyCtrl', function($scope,$http,$state,$stateParams,myService){

	$scope.z = myService.y;
	$scope.ind = $stateParams.id;

	$scope.thankyou = function(){
		alert("YOUR MESSAGE HAS BEEN SENT");
	}
});
//SERVICE
app.service('myService',function(){
	this.y = {};
});
