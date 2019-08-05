const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url =  `https://api.darksky.net/forecast/b5c7514b4c8c26f62d2f83a600ec1b0f/${latitude},${longitude}`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined)
    } else if (response.body.error) {
      callback(response.body.error, undefined)
    } else {
      callback(undefined, {
        currentTemp: response.body.currently.temperature,
        chanceOfRain: response.body.currently.precipProbability,
        summary: response.body.daily.data[0].summary
      })
    }
  })

}

module.exports = forecast
