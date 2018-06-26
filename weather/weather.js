const request = require('request')


var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/5120ec19a4c30bb4734dfff1c4b0d444/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to darksky.net')
        } else if (body.code === 400) {
            callback(`Unable to fetch weather: ${body.error}`)
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                summary: body.currently.summary,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
    })
}

module.exports = {
    getWeather
}
