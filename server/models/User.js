// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: { type: String, unique: false, default: null },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    googleId: { type: String, default: null  },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
