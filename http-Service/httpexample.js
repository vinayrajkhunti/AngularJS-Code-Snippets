var app = angular.module('myApp',['ui.router']);

/* THIS SNIPPET DEMONSTRATES THE USE OF $HTTP SERVICE.*/


app.controller('loginCtrl', function($scope,$http,$state){
	$scope.emaillist = function(){
		$state.go("listemail");
	}
});

/*Below controller defines a dependency to the $scope and the $http module.*/

app.controller('emailCtrl', function($scope,$http,$state,x){
  
	$scope.listpeople = [];
	/* An HTTP GET request to the data/list.json endpoint is carried out with the get method. 
	It returns a $promise object with a success and an error method. Once successful, the JSON data is 
	assigned to $scope.listpeople to make it available in the template. */
	$http.get('list.json')
		.success(function(resp){
			$scope.listpeople = resp;
			console.log($scope.listpeople);
		}) error(function(data, status, headers, config) {
      // log error
    });
	$scope.popupbox = function(ind){
		x.y=$scope.listpeople[ind];
		$state.go('reply',{'id':ind});
	}
});
app.controller('replyCtrl', function($scope,$http,$state,$stateParams,x){

	$scope.y = x.y;
	$scope.ind = $stateParams.id;

	$scope.thank = function(){
		alert("YOUR MESSAGE HAS BEEN SENT");
	}
});
app.service('x',function(){
	this.y = {};
});

app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('login')

	$stateProvider
		.state('login',{
			url:"/login",
			templateUrl:"login.html",
			controller:"loginCtrl"
		});
	$stateProvider
		.state('listemail',{
			url:"/listemail",
			templateUrl:"listemail.html",
			controller:"emailCtrl"
		});
	$stateProvider
		.state('reply',{
			url:"/reply",
			templateUrl:"reply.html",
			controller:"replyCtrl"
		});
	});

