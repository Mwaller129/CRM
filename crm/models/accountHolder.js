const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountHolderSchema = new Schema({
    Clients: {
        type: String
    },

    Activities: {
        Date
    }
    
   
})
module.exports = ('AccountHolder', accountHolderSchema);