const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    title: 'String',
    content: 'String'
}, { timestamps: true })

const Post = mongoose.model('users', Schema);

module.exports = Post;