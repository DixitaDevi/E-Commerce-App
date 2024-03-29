const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String , required: true },
    lastname: { type: String , required: true },
    orgName: { type: String , required : true },
    empId: { type: String , required: true },
    mobileNo: { type: String , required : true },
    idImg: { type: String , required: true },
    email: { type: String , required: true , unique: true },
    password: { type: String , required: true },
    regId : { type: String },
    role: { type: String , default: 'customer'}
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema)
