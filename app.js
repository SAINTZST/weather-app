const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Soi%20Mu%20Ban%20Rattanakorn%20Tambon%20Thai%20Ban%20Mai,%20Amphoe%20Mueang%20Samut%20Prakan%20Chang%20Wat%20Samut%20Prakan%2010280?key=https://maps.googleapis.com/maps/api/geocode/json?address=Soi%20Mu%20Ban%20Rattanakorn%20Tambon%20Thai%20Ban%20Mai,%20Amphoe%20Mueang%20Samut%20Prakan%20Chang%20Wat%20Samut%20Prakan%2010280?key=AIzaSyBZsPD9E-C67ek6419xd6Z2U4coCK7xS30',
    json: true
}, (error, response, body) => {
    var location = body.results[0].geometry.location
    console.log(`Address : ${body.results[0].formatted_address}`)
    console.log(`Latitude : ${location.lat}`)
    console.log(`Latitude : ${location.lng}`)
})