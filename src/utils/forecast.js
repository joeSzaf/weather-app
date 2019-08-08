const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url =  `https://api.darksky.net/forecast/b5c7514b4c8c26f62d2f83a600ec1b0f/${latitude},${longitude}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined)
    } else if (body.error) {
      callback(body.error, undefined)
    } else {
      callback(undefined, {
        currentTemp: body.currently.temperature,
        chanceOfRain: body.currently.precipProbability,
        summary: body.daily.data[0].summary
      })
    }
  })

}

module.exports = forecast
