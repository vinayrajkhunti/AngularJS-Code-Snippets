var app = angular.module('myApp',[' ']);


app.directive('helloFriend', function () {
        return {
            restrict: 'E',
            scope:{
                name:'bind'
            },
            template: '<h1> Hi {{name}} </h1>'

        }
    })

