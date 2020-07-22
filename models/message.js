const mongoose = require('mongoose')
const schema = mongoose.Schema;

const message = new schema({
    name: String,
    mobile: String,
    email: String,
    message: String,
    date: {type: Date,default: Date.now()}
})

module.exports = mongoose.model('Message', message);