const request = require('request')

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true
        }, (error, response, body) => {
            // console.log(body)
            if (error) {
                reject('Unable to connect to google servers.')
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that addresss.')
            } else if (body.status === 'OK') {
                var location = body.results[0].geometry.location
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: location.lat,
                    longitude: location.lng
                })
            }
        })
    })
}

geocodeAddress('Samutprakarn').then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
    console.log(errorMessage)
})