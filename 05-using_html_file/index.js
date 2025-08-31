import express from 'express' 
import path from 'path'
const app= express()


 
        app.get('/',(rep,res)=>{
            const abpath=path.resolve('./pages/home.html')
            res.sendFile(abpath)
            console.log("This is absolute  "+abpath)
        })    
          app.get('/about',(rep,res)=>{
            const abpath=path.resolve('./pages/About.html')
            res.sendFile(abpath)
            console.log("This is absolute path of about :- "+abpath)
        })                    
          app.get('/contact',(rep,res)=>{
            const abpath=path.resolve('./pages/contact.html')
            res.sendFile(abpath)
            console.log("This is absolute path of contact "+abpath)
        })    

app.listen(4000,()=>{
    
console.log("Port listening at 4000")

})
    