const axiosEvent = require('../config/axiosEvent');

class EventController {
    static getAllEvents(req, res, next) {
        axiosEvent.get('/search/?location.address=Jakarta')
            .then(events => {
                // console.log(events.data)
                res.status(200).json(events.data);
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
        axiosEvent.get(`/search/?${searchUri}`)
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

    static bookmark(req, res, next) {
        
    }
}

module.exports = EventController;