import express from "express"
import form from "./Modules/form.js"
import submit from "./Modules/submit.js"

const app = express()

app.get("/", (req, res) => {
        res.send(form())
        // console.log("api works")
})

app.post("/submit",(req,res)=>{
    res.send(submit());
})
   
app.listen(4000, () => {
    console.log("port running on 4000")
}) 