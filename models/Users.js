const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    tentaikhoan: {
        type: String, 
        unique: true
    },
    tenhienthi: {
        type: String
    },
    matkhau: String,
    thutu: Number,
    quantricapduoi: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }],
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles"
    }],
    trangthai: String // 
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;