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
const dashboardSchema = new Schema({
    Clients: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },

    Activities: [activitySchema]
   
});
module.exports = mongoose.model('Dashboard', dashboardSchema);