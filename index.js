const express = require('express'),
      app = express(),
      dotenv = require('dotenv').config(),
      payvassel = require("./payvessel/index")
      // Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    console.log(process.env.PAYVASSEL_URL)
    res.send("<h1>hello brother</h1>")
})

// creating virtual reserve account for wallets

app.post("/create/account",async(req,res)=>{
    const {email, phoneNumber, name} = req.body;
const response = await payvassel.createAccount({email, name, phoneNumber})
res.json({responseObj:response})
})

app.listen(2000, console.log("server is listen on port 2000"))