import express from 'express';
import path from 'path';
import morgan from 'morgan';

const app = express();
app.use(morgan("dev"))
app.get("/",(req,res)=>{
    res.send("this is default page")
})

app.get("/about",(req,res)=>{
    res.send("this is about page")
})

app.get("/contact",(req,res)=>{
    res.send("this is contact page")
})

app.get("/service",(req,res)=>{
    res.send("this is service page")
})

app.listen(4000,()=>{ 
    console.log("Server running at port 4000")
}) 