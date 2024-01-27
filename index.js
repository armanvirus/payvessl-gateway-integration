const express = require('express'),
      app = express(),
      dotenv = require('dotenv').config(),
      payvassel = require("./payvessel")
      // Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.send("<h1>hello brother</h1>")
})

// creating virtual reserve account for wallets

app.post("/create/account",async(req,res)=>{
    const {email, phoneNumber, name} = req.body;
const response = await payvassel.createAccount({email, name, phoneNumber})
console.log(response.data)
if(!response)
    return res.json({msg:"unable to create account"})
res.json({responseObj:"request completed"})
})

app.post("/debit", (req,res)=>{
    payvassel.recievePayment(req,res)
})

app.listen(2000, console.log("server is listen on port 2000"))