var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope,$http)
  {
			$scope.products = [];
			$http.get('filter.json')
			.success(function(resp){
				$scope.products = resp;
			})
		});
		
		app.filter('capitalize',function(){
			//THIS CUSTOM FILTER CAPITALIZE FIRST LETTER OF STRING
				var result = input;
				return result.charAt(0).toUpperCase()+result.substring(1);
			};
		});
		// TO REVERSE THE STRING, WE CAN USE 'reverse' CUSTOM FILTER, DEMONSTRATED AS BELOW.
		/*app.filter('reverse',function()
		{
  				return function(result){
  				  var result = $scope.products;
						return result.name.split('').reverse().join('')
  		};

  	});*/
