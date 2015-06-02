app.controller('OtherController', function ($scope, CarFactory) {
    $scope.deletedCars = CarFactory.deletedCars;
});