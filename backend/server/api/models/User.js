const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: [true, 'email cannot be blank.'],
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String,
       required:[true, 'password cannot be blank.'] },
    name:{
      type:String,
      required: [true, 'UserName cannot be blank.']
     },
     age:{
      type:String,
      required: [true, 'Age cannot be blank.']
     },
     contactno:{
      type:String,
      required: [true, 'Contact Number cannot be blank.']
     },
     address:{
      type:String,
      required: [true, 'Address cannot be blank.']
     },
});

const User = mongoose.model('User', userSchema);

module.exports = User;