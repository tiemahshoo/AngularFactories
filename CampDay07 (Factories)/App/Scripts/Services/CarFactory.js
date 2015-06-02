app.factory('CarFactory', function () {
    var o = {
        deletedCars: [],
        activeCars: []
    };

    o.deleteCar = function (car) {
        if (o.activeCars.indexOf(car) !== -1) {
            o.activeCars.splice(o.activeCars.indexOf(car), 1);
            o.deletedCars.push(car);
        }
    }
    return o;
});