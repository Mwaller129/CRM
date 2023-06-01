const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    content: {
        type: String    
    },
    appointmentTime: {
        Date
    },
    client: {type: Schema.Types.ObjectId, ref: 'Client'},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
    }, {
      timestamps: true

});
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
    status: {
        type: String,
        enum: ['New Client', 'Document Sent', 'Discovery', 'Closing'],
    },
    followUp: {
        type: String,
        enum:['Phone Call', 'Appointment Scheduled']
    },
    appointmentTime: {
        type: Date
    },
    activity: [activitySchema]

} ,{
    timestamps: true})

module.exports = mongoose.model('Client', clientSchema);