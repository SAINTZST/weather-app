const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      description: 'Address to fetch weather',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    console.log(results.address)
    weather.getWeather(results.latitude, results.longitude, (errorMessage, result) => {
      if (errorMessage) {
        console.log(errorMessage)
      } else {
        console.log(`It's currently ${result.temperature} but it feel like ${result.apparentTemperature}`)
      }
    })
  }
})
