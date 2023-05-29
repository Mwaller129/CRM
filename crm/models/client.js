const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema ({
    clientName: {
        type: String,
        required: True
    },
    clientPhoneNumber: {
        type: Number
    },
    clientEmailAddress: {
        type: String
    },
    lastContact: {
        Date
    },
    followUp: {
        type: String
    }

})

module.exports = mongoose.model('Client', clientSchema);