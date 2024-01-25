const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors= require("cors")
const PORT=process.env.PORT || 9091
const BackRouter=require("./router/Back.router")
app.use(express.json())
app.use(cors())
require("dotenv").config()
mongoose.connect("mongodb+srv://sahibibadov:123sahib123@sahib.dxzkrwt.mongodb.net/start").then(res=>{
    console.log("mongodb concect")
})
app.use("/backs",BackRouter)
app.listen(PORT,()=>{
    console.log("port aCTIVERT")
})