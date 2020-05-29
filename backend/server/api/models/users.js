var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
//  name:{
//   type:String,
//   required: [true, 'UserName cannot be blank.']
//  },
//  age:{
//   type:String,
//   required: [true, 'Age cannot be blank.']
//  },
//  contactno:{
//   type:String,
//   required: [true, 'Contact Number cannot be blank.']
//  },
//  address:{
//   type:String,
//   required: [true, 'Address cannot be blank.']
//  },
//  email:{
//   type:String,
//   required: [true, 'Email cannot be blank.']
//  }
 
});

User.plugin(passportLocalMongoose);