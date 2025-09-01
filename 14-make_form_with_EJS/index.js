import express from 'express'
import path from "path"
const app = express()

app.use(express.urlencoded())
app.set('view engine','ejs')
app.get('/', (req, res) => {
  let filePath = path.resolve("./views/form.html")
 res.sendFile(filePath)
})

app.post('/submit',(req,res)=>{
  res.render('submit',req.body)
})
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`listening on port port`)
}) 