function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwich with these items:");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("Enjoy your sandwich!\n");
}
//calling 3 fumctions with different number of arguments
sandwiches("Cheese", "Lettuce", "Chicken", "Ketchup", "Mayonnaise");
sandwiches("Butter", "Salad");
sandwiches("Egg", "Mayonnaise", "Cucumber");
