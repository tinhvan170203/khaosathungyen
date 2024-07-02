const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workSchema = new Schema({
    noidung: String,
    ghichu: String,
    date_giaoviec: String,
    canbonhanviec: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Canbos"
    },
    recevices: [
        {
            id_user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users"
            },
            status: {
                type: Boolean,
                default: false
            },
            reply: [{
                id_user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Users"
                },
                text: {
                    type: String,
                    default: ""
                },
                time: {
                    type: Date,
                    default: Date.now()
                },
                _id: mongoose.ObjectId
            }] 
        }
    ]
},
    { timestamps: true });

const Works = mongoose.model('Works', workSchema);

module.exports = Works;