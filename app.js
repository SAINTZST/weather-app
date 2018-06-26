const request = require('request')
const yargs = require('yargs')

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



var adderss = encodeURIComponent(argv.a)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${adderss}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to google servers.')
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that addresss.')
    } else if (body.status === 'OK') {
        var location = body.results[0].geometry.location
        console.log(`Address : ${body.results[0].formatted_address}`)
        console.log(`Latitude : ${location.lat}`)
        console.log(`Latitude : ${location.lng}`)
    }

})