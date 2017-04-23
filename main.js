var app;
app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get('users.json')
        .then(function (response) {
            $scope.users = response.data;
        });

    $scope.clickedUserId = {};

    $scope.selectUser = function (index) {
        $scope.clickedUserId = this.$index;
        console.log($scope.clickedUserId);
    };

    $scope.editItem = function () {
    };

    $scope.deleteUser = function () {
        $scope.users.people.splice($scope.clickedUserId, 1);
    };
});

//todo add checkbox