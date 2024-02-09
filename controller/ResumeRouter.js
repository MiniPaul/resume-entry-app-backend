const express=require("express")
const resumemodel=require("../Models/ResumeModel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let resume=new resumemodel(data)
    let result=await resume.save()
    res.json({
        status:"success"
    })
})
router.get("/viewall",async(req,res)=>{
    let result=await postmodel.find()
    .populate("userId","name age mobno address pincode email -_id ")//id and password not needed
    .exec()
    res.json(result)
})


module.exports=router
