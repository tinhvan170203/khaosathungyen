const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const canboSchema = new Schema({
  hoten: {
    type: String,
  },
  trangthai: Boolean, //active, delete muc 1 ddang hoat dong, xoa boi nguoi dung chi admin moi co quyen xoa hoan toan
});

const Canbos = mongoose.model("Canbos", canboSchema);

module.exports = Canbos;
