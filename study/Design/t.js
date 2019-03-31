var express = require('express')
var app = exppress();
app.get('/', (req, res)=>{
    res.send("{a:b")
})
app.listen(3000)