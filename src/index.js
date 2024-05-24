const express = require('express')
const {PORT}=require('./config/server_config')

const setupAndServer = async()=>{

    const app = express();
 
    app.listen(PORT,()=>{
        console.log(`server running on http://localhost:${PORT}`)
    })
}

setupAndServer()
