import express from 'express';
import filePath from './module/path.js';
import path from 'path';
// import { url } from 'inspector';

const app = express();
const imgPath = path.resolve('./images');
// console.log('Image path:', imgPath);

// ! Using middleware
// function checkOut(req,res,next){
//   console.log(req.url)
//   next()

// } 
app.use((req,res,next)=>{
  console.log(req.url)
  next()
})
  
//! Serve static files
app.use(express.static(filePath)); // CSS, JS, etc.
app.use("/images",express.static(imgPath));  // Images

//! Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(filePath, 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(filePath, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(filePath, 'contact.html'));
});

//! 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(filePath, 'error.html'));
});

//! Start server
app.listen(4000, () => {
  console.log('Server listening on http://localhost:4000');
});