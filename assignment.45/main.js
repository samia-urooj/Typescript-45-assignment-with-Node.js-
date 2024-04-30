function car_info(manufacturer_s, model_car) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var cars = {
        manufacturer: manufacturer_s,
        model: model_car,
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        cars[key.trim()] = value.trim();
    });
    return cars;
}
var carCall = car_info("Toyota", "Fortuner", "color: Black", "price: 6500000");
console.log(carCall);
