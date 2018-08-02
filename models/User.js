const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {required: [true, 'Let us know you by adding your name!']},
    email: {require: [true, 'Please add your email as well.']}
})

const User = mongoose.model("User", UserSchema)
module.exports = User

const user_resource = new User({
    name: 'John Doe',
    email: 'john@doe.com'
})

user_resource.save((error) => {
    if (error)
        console.log(error);
    res.send({
        success: true,
        code: 200,
        msg: "User added!"
    })
})

