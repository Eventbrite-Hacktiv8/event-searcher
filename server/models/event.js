const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
      type: String  
    },
    venue: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    UserId: {
        type: String,
        required: true
    }
})

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;