const express=require("express")
const logicPath=require("../controllers/logic")

const router=express.Router()



router.post('/express/new/user',logicPath.registerLogic)

router.post('/express/login/user',logicPath.loginLogic)

router.post('/express/new/task',logicPath.taskAddLogic)

router.get('/express/get/task',logicPath.taskGetLOgic)

router.delete('/express/task/delete/:id',logicPath.taskDelete)

router.post('/express/task/edit/:id',logicPath.editStatus)

module.exports=router