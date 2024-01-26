const express = require('express'),
      app = express(),
      dotenv = require('dotenv').config()

app.get('/', (req,res)=>{
    console.log(process.env.PAYVASSEL_URL)
    res.send("<h1>hello brother</h1>")
})

// creating virtual reserve account for wallets

app.listen(2000, console.log("server is listen on port 2000"))