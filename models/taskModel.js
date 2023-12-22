// const mongoose=require('mongoose')


// const taskscemea=new mongoose.Schema({
//     tasks:{
//         type:String,
//         trim:true,
       
//         required:true
//     },

//     dueDate:{
//         type:String,
      
       
//         required:true
//     },

//     priority:{
//         type:String,
       
//         // required:true
//     }
// })

// const task=new mongoose.model("task",taskscemea)

// module.exports=task


const mongoose=require('mongoose')


const taskSchema=new mongoose.Schema({
    uId:{
        type:String,
        required:true
    },
    task:{
        type:String,
        trim:true,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    tStatus:{
        type:String,
        required:true
    }
})

const tasks=new mongoose.model("tasks",taskSchema)
module.exports=tasks