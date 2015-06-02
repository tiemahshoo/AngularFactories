app.controller('HomeController', function ($scope, CarFactory) {
    $scope.inputCar = {};
    $scope.cars = CarFactory.activeCars;
    $scope.addCar = function () {
        $scope.cars.push($scope.inputCar);
        $scope.inputCar = {};
    };

    $scope.deleteCar = function (car) {
        CarFactory.deleteCar(car);
    }
});