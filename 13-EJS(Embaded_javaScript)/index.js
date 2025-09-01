import express from 'express'
import path from "path"
const app = express()

app.set('view engine','ejs')

app.get('/', (req, res) => {
 res.render('home',{name:"veer",course:'MERN'})
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`listening on port port`)
}) 