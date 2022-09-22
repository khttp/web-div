const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {urlencoded} = require('body-parser');
const date = require(__dirname+'/date.js');

app=express();
app.use(urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(__dirname));

items=['buy food','cook food','eat food'];
workItems=[];
app.get('/',(req,res)=>{
res.render('index',{listName:date.getDate(),listItems:items})
})


app.post('/',(req,res)=>{
    if (req.body.list=='work'){
        workItems.push(req.body.newItem)
        res.redirect('/work')
    }else{
    items.push(req.body.newItem)
    res.redirect('/')
    }
})

app.get('/work',(req,res)=>{
    
    res.render('index',{listName:'work list',listItems:workItems});
})

app.post('/work',(req,res)=>{
    workItems.push(req.body.newItem) 
    res.redirect('/work')
})


app.listen(3000,()=>{
    console.log('srever is running on port 3000');

})
