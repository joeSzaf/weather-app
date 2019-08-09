const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  messageOne.textContent = "Loading..."
  messageTwo.textContent = ""
  messageThree.textContent = ""

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = `Current temperature is ${data.forecast.currentTemp} with a high of ${data.forecast.temperatureHigh} and a low of ${data.forecast.temperatureLow}. There is a ${data.forecast.chanceOfRain * 100}% chance of Rain.`
        messageThree.textContent = `${data.forecast.summary}`
      }
    })
  })


})
