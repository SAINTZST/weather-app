const request = require('request')
const yargs = require('yargs')
const geocode = require('./geocode/geocode')

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
        console.log(JSON.stringify(results, undefined, 2))
    }
})
