const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const userRouter=require("./controller/userRouter")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/user",userRouter)

mongoose.connect("mongodb+srv://minipaul:minipaul@cluster0.isuura7.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.listen(3001,()=>{
    console.log("Server Running")
})