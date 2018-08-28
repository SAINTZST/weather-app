const yargs = require('yargs')
const axios = require('axios')

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

var encodedAddress = encodeURIComponent(argv.address)
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that addresss.')
    }
    var location = response.data.results[0].geometry.location
    var weatherUrl = `https://api.darksky.net/forecast/5120ec19a4c30bb4734dfff1c4b0d444/${location.lat},${location.lng}`
    console.log(response.data.results[0].formatted_address)
    return axios.get(weatherUrl)
  }).then((response) => {
    var temperature = response.data.currently.temperature
    var apparentTemperature = response.data.currently.apparentTemperature
    console.log(`It's currently ${temperature}. But it feel like ${apparentTemperature}`)
  }).catch((errorMessage) => {
    if (errorMessage.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers.')
    } else {
      console.log(errorMessage.message)
    }
  })
