const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema ({
    content: {
        type: String    
    },
    appointmentTime: {
        Date
    }
})
module.exports = mongoose.model('Activity', activitySchema);