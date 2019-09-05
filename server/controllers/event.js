
class EventController {
    static getAllEvents(req, res, next) {
        res.status(200).json({
            message: 'connected'
        })
    }
}

module.exports = EventController;