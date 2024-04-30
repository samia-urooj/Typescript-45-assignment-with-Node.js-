function describe_city(city:string , country:string = "Pakistan"){
    console.log(`${city} is in ${country}.`)
}

//printing a city with default country
describe_city("Karachi");
describe_city("Lahore");

//different country
describe_city("Seoul", "South Korea");