let express = require("express");
let node = express();
require("dotenv").config();
let port = 3001;

let data = {
    "crediential" : "The giant panda, sometimes called a panda bear or simply panda is a bear species endemic to China. It is characterised by its bold black-and-white  coat and rotund body. The name giant panda is sometimes used to distinguish it from the red panda, a neighboring musteloid"
}

node.get('/',(req,res)=>{
    res.send("Hello World");
})
node.get('/login',(req,res)=>{
    res.send("<h1>This is login route</h1>");
})
node.get('/loginCred',(req,res)=>{
    res.json(data)
})
node.listen(process.env.PORT,()=>{
 console.log(`they hue go ! your server is started --> ${port}`);
})