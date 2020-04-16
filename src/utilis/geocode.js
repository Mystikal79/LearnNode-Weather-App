const request = require('request');

//----- Generating Geocode with multiple callback functions & error responses
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibXlzdGlrYWwiLCJhIjoiY2s4b2x0dDJqMTIweDNnbjEwdWduczlmOCJ9.uRDD6nLCxIW4zSMzoLF80A'
 
    request({url, json: true}, (error, {body}) => {
       if (error) {
          callback('Unable to connect to location services!', undefined)
       } else if (body.features.length === 0) {
          callback('Unable to find location. Try another search.', undefined)
 
       } else {
          callback(undefined,  {
             latitude: body.features[0].center[1],
             longitude: body.features[0].center[0],
             location: body.features[0].place_name
          })
       }
    })
 }

 module.exports = geocode;