const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5cd7db77e7595817a75942fce7800ba3&query=' + lat + ',' + lon + '&units=f';

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
    
        } else {
            callback(undefined, 'The current temperature is ' + body.current.temperature + ' degree out.' + ' There is a ' + body.current.precip + '% chance of rain today.');
        }
    })
            
}

module.exports = forecast;