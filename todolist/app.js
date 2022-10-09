const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {urlencoded} = require('body-parser');
const date = require(__dirname+'/date.js');
const mongoose = require('mongoose');

app=express();
app.use(urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(__dirname));

//connect to a database
mongoose.connect('mongodb://localhost:27017/todolistDB');

const todoSchema=new mongoose.Schema({
    name:String
})
const todoList= mongoose.model('todoList',todoSchema)

const task1=new todoList({
    name:'buy food'
})
const task2=new todoList({
    name:'cook food'
})
const task3=new todoList({
    name:'eat food'
})


app.get('/',(req,res)=>{
    
    todoList.find({},(err,tasks)=>{
        if(tasks.length===0){
            todoList.insertMany([task1,task2,task3])
  
            res.redirect('/')
            }else{
            res.render('index',{listName:'Today!!!',listItems:tasks})
    }
});
})


app.post('/',(req,res)=>{
    const addItem=new todoList({
        name:req.body.newItem
    })
    addItem.save()
     
    res.redirect('/')
});
app.post('/delete',(req,res)=>{
   console.log(req.body._id);
    todoList.findByIdAndDelete(req.body._id,(err)=>{
        if (!err){
            
            console.log('deleted');
            res.redirect('/');
        }
    })
})



app.listen(3000,()=>{
    console.log('srever is running on port 3000');

})
