var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get('users.json')
        .then(function (response) {
            $scope.myUsers = response.data;
        });

    $scope.selectUser = function (user) {
        console.log(user);
        $scope.clickedUser = user;
    };
    $scope.editItem = function () {
        console.log("edit");
    };
    $scope.deleteItem = function (name) {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser))
    };
});

//todo add checkbox