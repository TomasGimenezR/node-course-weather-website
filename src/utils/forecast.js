const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/24de56d693d5caaadfc10f06ff0caadc/' + latitude + ',' + longitude + '?units=si&lang=en'

request({ url, json: true }, (error, {body}) => {
    if(error){
        callback('Unable to connect to forecast services!')
    }else if (body.error) {
        callback('Unable to find location. Try another search')
    }else{
        callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees Celcius. There is a ' + body.currently.precipProbability + '% rain chance.')
    }
})
}

module.exports = forecast
