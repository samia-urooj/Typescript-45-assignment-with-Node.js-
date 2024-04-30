function sandwiches(...items:string[]){
    console.log("Making sandwich with these items:");
    items.forEach(singleItem => console.log(singleItem));
    console.log("Enjoy your sandwich!\n");
}

//calling 3 fumctions with different number of arguments
sandwiches("Cheese", "Lettuce", "Chicken", "Ketchup", "Mayonnaise");

sandwiches("Butter", "Salad");

sandwiches("Egg", "Mayonnaise", "Cucumber");
