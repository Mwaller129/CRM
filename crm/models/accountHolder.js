const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    content: {
        type: String    
    },
    appointmentTime: {
        Date
    },
    client: {type: Schema.Types.ObjectId, ref: 'Client'}
});
const accountHolderSchema = new Schema({
    Clients: {
        type: String
    },

    Activities: [activitySchema]
   
});
module.exports = mongoose.model('AccountHolder', accountHolderSchema);