const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
app.listen(5000,()=>{
    console.log("server is running successsfully");
})
const routes = require('./routes');
app.use('/',routes);
app.get('/',(req,res)=>{
    res.send('active at this port');
})