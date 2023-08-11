const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const screenShotSchema = new mongoose.Schema({
    imgurl: { type: String},
  
  
}
,
{ timestamps: true }
);

const ScreenShot= mongoose.model("ScreenShot", screenShotSchema)
module.exports = ScreenShot;
