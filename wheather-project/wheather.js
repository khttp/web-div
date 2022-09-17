const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');


app= express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
});

app.post('/',(req,res)=>{


const cityname=req.body.city;
const apikey='ce1c42fc470201b40ca2794ef81a3ebd'
const url='https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&lat=44.34&lon=10.99&appid='+apikey

https.get(url,(response)=>{
    console.log(response.statuscode);
    response.on('data',(data)=>{
        console.log(data);
        wheatherdata=JSON.parse(data)
        const temp=wheatherdata.main.temp;
        const descripe=wheatherdata.weather[0].description;
        const icon=wheatherdata.weather[0].icon
        const imgUrl='http://openweathermap.org/img/wn/'+icon+'@2x.png'
        res.write('<p>the temp in '+cityname+' is '+temp+ ' degree </p>')
        res.write('<img src='+imgUrl+'>')
        res.write('<h2> the wheather there is '+descripe+'</h2>')
        res.send();

    })
})
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');

});
