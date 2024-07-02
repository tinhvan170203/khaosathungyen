const Users = require("../models/Users");
const _ = require('lodash');

let checkRole = (role) => {
    return async (req, res, next) => {
        let userId = req.userId.userId;

        const user = await Users.findOne({ _id: userId });

        if (user === null) {
            res.status(403).json({ message: "Tài khoản không tồn tại, vui lòng đăng nhập lại" })
        } else {
            next();
        }
    }
}

module.exports = checkRole;