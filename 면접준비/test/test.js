const express = require('express'); 
const app = express(); 
app.use(express.static('dist')) 
app.get('/getAjax', function(req,res){
    res.send("루시드라는 데이터입니다.") 
}) 
app.listen(8080, function(){
    console.log("app start");
})