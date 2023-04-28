const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    username: 'String',
    password: 'String',
    email: 'String'
}, { timestamps: true })

const Post = mongoose.model('users', Schema);

module.exports = Post;