// const request = require('request')
// const yargs = require('yargs')
// const geocode = require('./geocode/geocode')

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             description: 'Address to fetch weather',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv

// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage)
//     } else {
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// })

//5120ec19a4c30bb4734dfff1c4b0d444

const request = require('request')

request({
    url: 'https://api.darksky.net/forecast/5120ec19a4c30bb4734dfff1c4b0d444/13.5990961,100.5998319',
    json: true
}, (error, response, body) => {

    if (error) {
        console.log('Unable to connect to darksky.net')
    } else if (body.code === 400) {
        console.log()
        console.log(`Unable to fetch weather: ${body.error}`)
    } else {
        console.log(body.currently.temperature)
    }
})
