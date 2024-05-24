const express = require('express')
const bodyParser = require('body-parser')
const {PORT}=require('./config/server_config')

const setupAndServer = async()=>{
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended:true}));
    const app = express();
 
    app.listen(PORT,()=>{
        console.log(`server running on http://localhost:${PORT}`)
    })
}

setupAndServer()
