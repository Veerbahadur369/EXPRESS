import express from 'express';
import path from 'path';

let data =[]
const app = express();
app.use(express.static('public'))
app.use(express.urlencoded({extended : false}))  //* This is built in middleware to handle to parse data to body
app.get("/",(req,res)=>{
    const filePath = path.resolve("public/view/home.html")
    res.sendFile(filePath)
})

app.get("/form",(req,res)=>{
    const filePath = path.resolve("public/view/form.html")
    res.sendFile(filePath)
})

app.post("/submited",(req,res)=>{       //~   Post is used for getting post request of urll
    const filePath = path.resolve("public/view/submited.html")
    res.sendFile(filePath)
    console.log(req.body)      // *  body :-   all data send in the request body
    data.push(req.body)  
})

app.listen(4000,()=>{
    console.log("Server running at port 4000")
}) 