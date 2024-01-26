const express = require('express'),
      app = express();

app.get('/', (req,res)=>{
    res.send("<h1>hello brother</h1>")
})

app.listen(2000, console.log("server is listen on port 2000"))