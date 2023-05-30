const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema ({
    clientName: {
        type: String,
    },
    clientPhoneNumber: {
        type: Number
    },
    clientEmailAddress: {
        type: String
    },
    notes: {
        Date
    },
    followUp: {
        type: String
    }

})

module.exports = mongoose.model('Client', clientSchema);