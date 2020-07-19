const mongoose = require('mongoose')
const schema = mongoose.Schema;
const project = new schema({
    name: String,
    mobile: String,
    email: String,
    ptype:String,
    project: String,
    file: [],
    date: {type: Date,default: Date.now()}
})

module.exports = mongoose.model('Project', project);