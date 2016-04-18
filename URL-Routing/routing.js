var app = angular.module('myApp',['ui.router']);
// Our AngularJS app is injected with 'ui.router' module.

app.controller('homeCtrl',function ($scope,$state)
{
});

app.controller('detailCtrl',function($scope,x,$stateParams,$state)
{
  /* $stateParams service is an object that can store information about a url.
  This means that if the url is /this/is/a/url, I can pass any of those url parameters
  into the $stateParams object and use that information in another state/controller.*/
});

app.controller('confirmCtrl',function($scope,x,$stateParams,$state)
{  
});

app.controller('welcomeCtrl',function($scope,x,$stateParams,$state){
	$scope.gohome = function(){
		$state.go('guitarhome');
		//$tate service is very useful for representing states and also for transitioning between them.
		//$state.go(); is a convenience method for transitioning to a new state(In our case, it is 'guitarhome').
	};
});
// 'x' here, is a simple service, I have developed.
app.service('x',function(){
	this.y = {};
});

/*Initially the index.html will be redirected to "guitarwelcome.html" This is because, we have specified it in "otherwise" function. 
Now, when the user accesses index.html/guitarhome then the 'guitarhome' state would become 
active and the main ui-view will be populated with the 'guitarhome.html' partial. 
Alternatively, if the user were to transition to the 'guitarhome' state via 
transitionTo('guitarhome') then the url would be updated to index.html/guitarhome */


app.config(function($stateProvider,$urlRouterProvider){
  // if the path doesn't match any of the urls you configured
    // otherwise will take care of routing the user to the specified url(in our case it is "guitarwelcome")
	$urlRouterProvider.otherwise('/guitarwelcome')

	$stateProvider
		.state('guitarhome',{
			url:"/guitarhome",
			templateUrl:"guitarhome.html",
			controller:"homeCtrl"
		});
	$stateProvider
		.state('guitardetail',{
			url:"/guitardetail",
			templateUrl:"guitardetail.html",
			controller:"detailCtrl"
		});
	$stateProvider
		.state('guitarconfirm',{
			url:"/guitarconfirm",
			templateUrl:"guitarconfirm.html",
			controller:"confirmCtrl"
		});
	$stateProvider
		.state('guitarwelcome',{
			url:"/guitarwelcome",
			templateUrl:"guitarwelcome.html",
			controller:"welcomeCtrl"
		});
