const Chucvus = require("../models/Chucvus");
const Canbos = require("../models/Canbo");
const Works = require("../models/Works");
const mongoose = require('mongoose')

module.exports = {
  getWorks: async (req, res) => {
    try {
      let works = await Works.find({
        sender: req.userId.userId
      }).sort({ date: -1 }).populate('recevices.id_user', { tenhienthi: 1 }).populate("recevices.reply.id_user", { tenhienthi: 1 });

      res.status(200).json(works);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra. Vui lòng liên hệ quản trị viên",
      });
    }
  },
  searchWork: async (req, res) => {
    let { tungay, denngay, noidung, diadiem, ketqua, target } = req.query;
    // console.log(req.query)
    try {
      if (tungay === "") {
        tungay = "1970-01-01"
      };
      if (denngay === "") {
        denngay = "9999-01-01"
      };
      let options = target === "" ?
        {
          sender: req.userId.userId,
          noidung: { $regex: noidung, $options: "i" },
          diadiem: { $regex: diadiem, $options: "i" },
          ketqua: { $regex: ketqua, $options: "i" },
          date: {
            $gte: tungay,
            $lte: denngay,
          }
        } : {
          sender: req.userId.userId,
          noidung: { $regex: noidung, $options: "i" },
          diadiem: { $regex: diadiem, $options: "i" },
          ketqua: { $regex: ketqua, $options: "i" },
          date: {
            $gte: tungay,
            $lte: denngay,
          },
          "recevices.id_user": target
        }

      let works = await Works.find(options).sort({ date: -1 }).populate('recevices.id_user', { tenhienthi: 1 }).populate("recevices.reply.id_user", { tenhienthi: 1 });

      res.status(200).json(works);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra. Vui lòng liên hệ quản trị viên",
      });
    }
  },

  addWork: async (req, res) => {
    let id_user = req.userId.userId;
    // console.log(req.body)
    // let roo
    try {
      let newItem = new Works(req.body);
      newItem.sender = id_user;
      newItem.recevices = req.body.recevices.map(i => ({
        id_user: i
      }));
      await newItem.save();
      let work = await Works.findById(newItem._id).populate('recevices.id_user', { tenhienthi: 1 }).populate("recevices.reply.id_user", { tenhienthi: 1 });
      res.status(200).json({ message: "Thêm mới thành công!", work })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra. Vui lòng liên hệ quản trị viên",
      });
    }
  },

  updateChucvu: async (req, res) => {
    let { thutu, chucvu } = req.body;

    let id = req.params.id;
    try {
      await Chucvus.findByIdAndUpdate(id, {
        thutu, chucvu,
      });

      let chucvuList = await Chucvus.find({
      }).sort({ thutu: 1 })

      res.status(200).json({ chucvuList, message: "Update chức vụ thành công!" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra khi update chức vụ. Vui lòng liên hệ quản trị viên",
      });
    }
  },

  deleteChucvu: async (req, res) => {
    let id = req.params.id;
    try {
      let checked = await Canbos.findOne({
        "chucvu.chucvu": id
      });

      if (checked !== null) {
        const error = new Error('Thao tác xóa thất bại do có đoàn viên đang giữ chức vụ bạn muốn xóa. Vui lòng kiểm tra lại hành động xóa chức vụ');
        error.status = 401;
        throw error;
      };

      await Chucvus.findByIdAndDelete(id);
      let chucvuList = await Chucvus.find({
      }).sort({ thutu: 1 });

      res.status(200).json({ chucvuList, message: "Xóa chức vụ thành công!" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: error.message,
      });
    }
  },

  addCommentForOwn: async (req, res) => {
    let { comment, id_work, id_user_target } = req.body;
    try {
      let item = await Works.updateOne({
        _id: id_work,
        "recevices.id_user": id_user_target
      }, {
        "$push": {
          "recevices.$.reply": {
            id_user: req.userId.userId,
            text: comment,
            time: Date.now(),
            _id: new mongoose.Types.ObjectId()
          }
        }
      }, {
        new: true
      });
      res.status(200).json({ message: "Thêm ý kiến phản hồi thành công" })
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra. Vui lòng liên hệ quản trị viên",
      });
    }
  },

  fetchWorksNotSeen: async (req, res) => {
    try {
      let works = await Works.find({
        "recevices.id_user": req.userId.userId,
        "recevices.status": false
      }).populate('recevices.id_user', { tenhienthi: 1 }).populate("sender", {tenhienthi: 1}).populate("recevices.reply.id_user", { tenhienthi: 1 });
      works = works.map(i=>({
        ...i._doc, recevices: [i.recevices[i.recevices.findIndex(e=> e.id_user._id.toString() === req.userId.userId)]]
      }));
      // console.log(works[0].recevices.findIndex(e=> e.id_user._id.toString() === req.userId.userId))
      res.status(200).json(works);
    } catch (error) {
      console.log("lỗi: ", error.message);
      res.status(401).json({
        status: "failed",
        message: "Có lỗi xảy ra. Vui lòng liên hệ quản trị viên",
      });
    }
  }

};
