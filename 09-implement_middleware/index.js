import express from "express"

const app = express()
        //& These are global  middleware it mean we need to check at every route 

//~ This below middlware is used for age checking        
// function ageCheker(req,res,next){
//     if(req.query.age>=18){
//         next()
//     }
//     else{
//         res.send("You are not aligeble")
//     }
// }


// ~ This below middlware is used for block particular ip of user
function ipchecker(req,res,next){
const ip = req.socket.remoteAddress
console.log(ip)
if(ip.includes("172.18.33.247")){
    res.send("your not eligable")
}
else{
next()
}
}
app.use(ipchecker)

app.get("/",(req,res)=>{
    console.log("hello default page")
    res.send("hello default")
})
app.get("/about",(req,res)=>{
    console.log("hello default page")
    res.send("hello about")
})
app.get("/contact",(req,res)=>{
    console.log("hello default page")
    res.send("hello contact")
}) 
app.get("/service",(req,res)=>{
    console.log("hello default page")
    res.send("hello service")
})

app.listen(4000,()=>{console.log("server running")})