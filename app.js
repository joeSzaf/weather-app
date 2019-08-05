const request = require("request")
const geocode = require("./utils/geocode")

const url =  "https://api.darksky.net/forecast/b5c7514b4c8c26f62d2f83a600ec1b0f/42.3601,-71.0589"

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to comnnect to weather service!")
//   } else if (response.body.error) {
//     console.log(response.body.error)
//   } else {
//     const currentTemp = response.body.currently.temperature
//     const chanceOfRain = response.body.currently.precipProbability
//
//     console.log(response.body.daily.data[0].summary)
//     console.log(`It is currently ${currentTemp} defrees out. There is a ${chanceOfRain * 100}% chance of rain.`)
//   }
// })

// good url
// const mapUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam9lc3phZiIsImEiOiJjam05YWw5d3IxOHhvM3BxcTF5a2trcHFvIn0.I_mitvFrByYyOOaSrWEmGQ&limit=1"
// // bad url
// // const mapUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/fasdfioasdfuasjfajsfjks.json?access_token=pk.eyJ1Ijoiam9lc3phZiIsImEiOiJjam05YWw5d3IxOHhvM3BxcTF5a2trcHFvIn0.I_mitvFrByYyOOaSrWEmGQ&limit=1"
//
// request({ url: mapUrl, json: true}, (error, response) => {
//
//   if (error) {
//     console.log("unable to connect to location services!")
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location. Try another search.")
//   } else {
//     const lat = response.body.features[0].center[1]
//     const long = response.body.features[0].center[0]
//     const name = response.body.features[0].place_name
//
//     console.log(name + ":")
//     console.log(`Lat: ${lat}`)
//     console.log(`Long: ${long}`)
//   }
// })



geocode('Worcester, MA', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
