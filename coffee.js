const { Router } = require('express');
const express =require('express');
const app = express();
const path =require("path")  
const router = express.Router();

const port=3300;

app.get("/",(req,res)=>{
  res.status(200).sendFile(path.join(__dirname,"/Coffee.html"))
});
app.use('/',router)
app.listen(port,()=>{
    console.log(`Serving files at ${port}`)
})