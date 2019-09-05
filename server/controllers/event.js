const axiosEvent = require('../config/axiosEvent');
const Event = require('../models/event');

class EventController {
    static getAllEvents(req, res, next) {
        axiosEvent.get('/events/search/?location.address=Jakarta&expand=venue')
            .then(({data}) => {
                let events = [];

                data.events.forEach((event, i) => {
                    if (i <= 10) {
                        let {id, name, description, start, end, is_free, venue, logo} = event;
                    
                    let obj = {
                        id,
                        name: name.text,
                        description: description.text,
                        start: start.local,
                        end: end.local,
                        is_free,
                        venue,
                        logo
                    }
                    events.push(obj);
                    }
                })

                // for (let i = 0; i < 20; i++) {

                // }

                console.log(events[0]);
                
                res.status(200).json(events);
            })
            .catch(next);
    }

    static filter(req, res, next) {
        let fields = Object.keys(req.query);
        let values = Object.values(req.query);

        console.log(fields)
        console.log(values)
        let searchUri = '';

        fields.forEach((field, i) => {
            searchUri += `${field}=${values[i]}&`;
        })

        console.log(searchUri)
        axiosEvent.get(`/events/search/?${searchUri}`)
            .then(events => {
                res.status(200).json(events.data);
            })
            .catch(next);
    }

    static categories(req, res, next) {
        axiosEvent.get('/categories')
            .then(categories => {
                res.status(200).json(categories.data);
            })
            .catch(next)
    }

    static saveEvent(req, res, next) {
        const { eventId, name, venue } = req.body;

        Event.findOne({eventId})
        .then(event => {
            if (event) {
                throw new Error('Event already saved');
            } else {
                return Event.create({
                    eventId,
                    name,
                    venue
                })
            }
        })
        .then(event => {
            console.log(event);
            res.status(201).json({
                message: 'Event saved'
            })
        })
        .catch(next);

    }
}



module.exports = EventController;