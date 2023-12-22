//import express
const express=require('express')

const router=require('./router/routes')

//import cors
const cors=require('cors')

//server creation
const server=express()

// use
server.use(cors())
server.use(express.json())
server.use(router)

require('dotenv').config()
require('./connections/connections')

const port=4001 || process.env.port
server.listen(port,()=>{
    console.log(`_____todo server start at the port ${port}____`);
})

