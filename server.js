const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.use('/login', (req,res)=>{
    res.send({
        token: 'test123'
    });
})

app.listen(3600, ()=>console.log("Server is listening at port 3600"))
