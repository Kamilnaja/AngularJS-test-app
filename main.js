var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get('users.json')
        .then(function(response) {
            $scope.myUsers = response.data;
            console.log($scope.myUsers.people[1].name);
        })
});
