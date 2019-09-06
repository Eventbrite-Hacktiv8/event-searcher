const axios = require('axios')
const baseUrl = 'http://api.teamup.com'

class CalendarController{
    static createEvent(req,res){
        axios.post(baseUrl + '/ksx2zt9xpkatdebikm/events', {
            subcalendar_id:6989803,
            start_dt: req.body.start,
            end_dt: req.body.end,
            all_day: false,
            title: req.body.title,
            location: req.body.location,
            notes: req.body.notes
        },
        {headers:{
            'Teamup-Token':'969e3c1e646742c69cad70b738da340216454b84e0dffa6f830124dec6e4b6dd'
        }}
        ).then(({data})=>{
            console.log(data)
            res.status(201).json({
                message: 'success added the event',
                event: data
            })
        }).catch((err)=>{
            res.status(400).json({
                message: 'failed to add the event',
                error: err
            })
        })
    }
}

module.exports = CalendarController