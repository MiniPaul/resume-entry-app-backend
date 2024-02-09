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

router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=input.email
    let  data=await usermodel.findOne({"email":email})
    if(!data)
    {
        return res.json(
            {
                status:"invalid user"
            }
        )
    }
    console.log(data)
    let dbpassword = data.password
    let inputpassword=req.body.password
    console.log(dbpassword)
    console.log(inputpassword)

    const match=await bcrypt.compare(inputpassword,dbpassword)
    if(!match)
    {
        return res.json(
            {
                status:"Invalid password"
            }
        )
    }

    res.json({
        status:"success"
    })

    
})

module.exports=router