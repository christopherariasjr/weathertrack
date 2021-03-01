const mongoose = require('mongoose')
require('dotenv').config()
//City data from https://simplemaps.com/data/us-cities
const dbURL = 'mongodb://localhost:27017/weathercheck'

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })

var City = require('./models/City')

 async function process(){
    const citiesData = require('./usCities.json')
    console.log("Cities in file: " + citiesData.length);

    for(var city of citiesData) {
        console.log(city.city);
        var payload = {
            city: city.city.toLowerCase(),
            state: city.state_name.toLowerCase(),
            state_id: city.state_id.toLowerCase(),
            county: city.county_name.toLowerCase(),
            zip_codes: city.zips.toString().split(" "),
            lat: city.lat,
            lng: city.lng,
        }
    
        var newCity = new City(payload);
        await newCity.save();
    }

    mongoose.connection.close()
}
(async () => {
    console.log('Checking City list')
    var results = await City.find({}).then(docs => docs)
    console.log('Cities: ' + results.length);
    if(results.length === 0) {
        console.log("Adding Cites");
        process();
    }
    console.log('BYE!')
    mongoose.connection.close()

})()




//

