const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/24de56d693d5caaadfc10f06ff0caadc/' + latitude + ',' + longitude + '?units=si&lang=en'

request({ url, json: true }, (error, {body}) => {
    if(error){
        callback('Unable to connect to forecast services!')
    }else if (body.error) {
        callback('Unable to find location. Try another search')
    }else{
        callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees Celcius. \r\nThere is a ' + body.currently.precipProbability + '% rain chance. \r\nThe apparent temperature is ' + body.currently.apparentTemperature + ' degrees Celcius, with a temperature high of '+ body.daily.data[0].temperatureHigh + ' degrees Celcius and a low of ' + body.daily.data[0].temperatureLow + ' degrees Celcius. \r\n Tomorrow will be ' + body.daily.data[1].summary )
    }
})
}

module.exports = forecast
