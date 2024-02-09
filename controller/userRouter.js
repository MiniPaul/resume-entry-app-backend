const express=require("express")
const usermodel=require("../Models/userModel")

const bcrypt=require("bcryptjs")

const router=express.Router()

hashPasswordGenerator=async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt) 
}

router.post("/register",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password

    const hashedpassword=await hashPasswordGenerator(password)
    data.password=hashedpassword
    let user = new usermodel(data)
    let result=await user.save()
    res.json({
        status:"success"
    })
})


module.exports=router