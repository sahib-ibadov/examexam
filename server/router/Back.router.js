 const express=require("express")
const { BackController } = require("../controllers/Back.controller")
 const router=express.Router()

 router.get("/",BackController.getAll)
 router.get("/:id",BackController.getById)
 router.post("/",BackController.add)
 router.delete("/:id",BackController.delete)

 module.exports=router