module.exports = {
    errorHandler(err, req, res, next) {
        console.log(err)
        const status = err.status || 500;
        const message = err.message || 'Internal Server Error';

        if (err.message = 'Event already saved') {
            res.status(500).json("Event already saved")
        } else {
            res.status(status).json(message)
        }
    }
}