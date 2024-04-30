function car_info(manufacturer_s , model_car , ...options){
    let cars : {manufacturer:string , model:string} = {
       manufacturer : manufacturer_s,
       model :model_car,
    };
    options.forEach(option => {
        let [key , value] = option.split(":");
        cars[key.trim()] = value.trim();
    });
    return cars;

}
let carCall = car_info("Toyota", "Fortuner" , "color: Black" , "price: 6500000");
console.log(carCall);