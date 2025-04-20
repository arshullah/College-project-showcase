const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    rollNo:{type:Number,required:true,unique:true},
    course: {type : String, default: 'Unknown'},
    year:{type:Number},
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('user', mySchema);                           