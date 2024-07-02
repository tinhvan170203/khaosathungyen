const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    tennhom: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
},{timestamps: true});

const GroupUser = mongoose.model('GroupUser', groupSchema);

module.exports = GroupUser;