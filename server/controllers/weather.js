const axiosOW = require('../config/axiosOpenWeather')
class WeatherController{
   static getWheather(req,res,next){
    //console.log('test22222');
    console.log(req.body.city,'cityy')
    let city = req.body.city //req.body.cit
    console.log(city);
    
    axiosOW.get(`weather?q=${city}&units=metric&APPID=416a2d1227549cf2ae80e01fb079c5ce`)
    .then(({data}) =>{
    //    console.log('temperatur',data.main.temp);
    //    console.log('cuaca',data.weather[0].main);
    let cuaca = {temp:data.main.temp,cuaca:data.weather[0].main}
    res.status(200).json(cuaca)
    })
    .catch(err => {
        next(err)
    })
   }
}
module.exports = WeatherController