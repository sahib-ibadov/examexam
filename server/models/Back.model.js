const mongoose=require("mongoose")

const Back = mongoose.model("Back",new mongoose.Schema({
    image:String,
    title:String,
    decs:String,
    price:Number
}))

module.exports={Back}