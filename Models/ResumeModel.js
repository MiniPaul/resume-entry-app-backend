const mongoose=require("mongoose")

const resumeSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user"
        },
        profile:{
            type:String,
            required:true
        },
        skill:{
            type:String,
            required:true
        },
        qualification:{
            type:String,
            required:true
        },
        certification:{
            type:String,
            required:true
        },
        project:{
            type:String,
            required:true
        },
        workexperience:{
            type:String,
            required:true
        },
        languages:{
            type:String,
            required:true
        },
        createdDate:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports=mongoose.model("resumeEntry",resumeSchema)