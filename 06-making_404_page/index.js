import express from 'express' 
import path from "./module/path.js"
const app= express()


     console.log(path)
        app.get('/',(rep,res)=>{
            
            res.sendFile(path+"/home.html")
            console.log("This is absolute  "+path)
        })    
          app.get('/about',(rep,res)=>{
            res.sendFile(path+"/about")
            console.log("This is absolute path of about :- "+path)
        })                    
          app.get('/contact',(rep,res)=>{
            res.sendFile(path+"/contact")
            console.log("This is absolute path of contact "+path)
        })   
        app.use((req,res)=>{

          res.status(404).sendFile(path+"/error.html")
        })  

app.listen(4000,()=>{
    
console.log("server running on 4000")

})
    