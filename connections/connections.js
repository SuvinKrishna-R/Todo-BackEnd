   const mongoose=require('mongoose')
mongoose.connect(process.env.base_url,{

    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('___mongo db atlas connected____');
}).catch((error)=>{
    console.log("connection error",error);
})