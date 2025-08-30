import express from 'express' 
import filePath from "./module/path.js"
const app= express()


    const cssPath =filePath 
    console.log(cssPath)
    app.use(express.static(cssPath))
        app.get('/',(rep,res)=>{
            
            res.sendFile(filePath+"/home.html")
            console.log("This is absolute  "+filePath)
        })    
          app.get('/about',(rep,res)=>{
            res.sendFile(filePath+"/about.html")
            console.log("This is absolute filePath of about :- "+filePath)
        })                    
          app.get('/contact',(rep,res)=>{
            res.sendFile(filePath+"/contact.html")
            console.log("This is absolute filePath of contact "+filePath)
        })   
        app.use((req,res)=>{

          res.status(404).sendFile(filePath+"/error.html")
        }) 

app.listen(4000,()=>{
    
console.log("Port listening at 4000")

})
    