app.factory('CarFactory', function ($http) {
    var o = {
        deletedCars: [],
        activeCars: []
    };

    o.addCar = function (car) {
        $http({
            method: 'POST',
            data: car,
            url: 'https://oceancreature.firebaseio.com/.json'
        }).success(function (data) {
            car.id = data.name;
            o.activeCars.push(car);
        });
    };

    o.deleteCar = function (car) {
        if (o.activeCars.indexOf(car) !== -1) {
            var i = o.activeCars.indexOf(car);
            $http({
                method: 'PATCH',
                url: 'https://oceancreature.firebaseio.com/' + car.id + '/.json',
                data: { isDeleted: true }
            }).success(function (data) {
                o.activeCars.splice(i, 1);
                car.isDeleted = true;
                o.deletedCars.push(car);
            });
        }
    };

    o.getCars = function () {
        $http({
            method: 'GET',
            url: 'https://oceancreature.firebaseio.com/.json'
        }).success(function (data) {
            for (var prop in data) {
                data[prop].id = prop;
                if (data[prop].isDeleted) o.deletedCars.push(data[prop])
                else o.activeCars.push(data[prop])
            }
        });
    };

    o.getCars();

    return o;
});