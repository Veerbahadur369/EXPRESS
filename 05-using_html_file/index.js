const express =require("express")

const app= express()

app.get("",(req,res)=>{
    res.send("<h1>hell express</h1>")
})
 
app.get("",(req,res)=>{
    res.send("<h2>This is about page</h2>")
})

app.listen(4000,()=>{

    console.log("Port listening at 4000")
})