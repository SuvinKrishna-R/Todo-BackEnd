const tasks=require("../models/taskModel")
const users=require("../models/userModel")

// register logic

const registerLogic=async(req,res)=>{
    const{uname,email,psw}=req.body
    if(!uname || !email || !psw ){
        res.status(400).json('All Datas Are Required')
    }
    else{
        try{
            const userRegister=await users.findOne({email})
                if(userRegister){
                    res.status(400).json('User Already Exist')
                }
                else{
                    let newRegister=new users({
                        uname,
                        email,
                        psw,

                    })
                    await newRegister.save()
                    res.status(200).json(uname)
                }
            
            }
        catch{
            res.status(400).json("connection error")
        }    
    }
}



//login logic

const loginLogic=async(req,res)=>{
    const{uname,psw}=req.body
    if(!uname || !psw){
        res.status(400).json('All Datas Are Required')
    }
    else{
        try{
            const loginUser=await users.findOne({uname,psw})
            if(loginUser){
                res.status(200).json({uid:loginUser._id})
            }
            else{
                res.status(400).json('User not Present')
            }
            }
        catch{
                res.status(400).json('Connection Error')
            }


    }   
}

//task add logic

const taskAddLogic=async(req,res)=>{

    const{task,dueDate,priority,uid}=req.body
    if(!task || !dueDate || !priority){
        res.status(400).json('All datas are required')
    }
    else{
        try{
        var newTask=new tasks({
            uId:uid,
            task,
            dueDate,
            priority,
            tStatus:" "

        })
        await newTask.save()
        res.status(200).json(task)

        } 
        catch{
            res.status(400).json('connection error')
          }
    }
       
    }

    // task get logic

    const taskGetLOgic=async(req,res)=>{
        const uid=req.query.uid
        try{
            const taskDetails=await tasks.find({uId:uid})
            if(taskDetails){
                res.status(200).json(taskDetails)
            }
            else{
                res.status(400).json('no data presented')
            }
        }
        catch{res.status(400).json('connection error')

        }
    }


    //task delete logic

    const taskDelete=async(req,res)=>{
        const {id}=req.params
        try{
        const deletedTask=await tasks.findByIdAndDelete({_id:id})
        if(deletedTask){
            res.status(200).json(deletedTask)
        }
        else{
            res.status(400).json(" Task not found")
        }
        }
        catch{
            res.status(400).json("Connection Error")
        }
    }

    // edit task(ongoing/complete)
    const editStatus=async(req,res)=>{
        const {id}=req.params
        const {tStatus}=req.body

        try{
            const tasksss=await tasks.findOne({_id:id}) 
            if(tasksss){
                tasksss.tStatus=tStatus
               
                await tasksss.save()
                res.status(200).json(tasksss)
            }
            else{
                res.status(400).json('Task not found')
            }
        }
        catch{
            res.status(400).json('Connection Error')

        }
    }

    module.exports={ taskAddLogic,taskGetLOgic,registerLogic,loginLogic,taskDelete,editStatus}
