

const express= require('express');
const cors = require('cors');
const app=express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('my second node app testing');
})

const users=[
    {'id':0,'name':'lakib','email':'lakib@gmail.com'},
    {'id':1,'name':'rakib','email':'Rakib@gmail.com'},
    {'id':2,'name':'sakib','email':'sakib@gmail.com'},
    {'id':3,'name':'nakib','email':'nakib@gmail.com'},
    {'id':4,'name':'bakib','email':'bakib@gmail.com'}

]

app.post('/users',(req,res)=>{
    console.log('cosole hitting',req.body);
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    res.json(newUser);
    // res.send('post mathoud showing');
})

app.get('/users',(req,res)=>{
    const search=req.query.search;
    console.log(search);
    if(search){
    const serchfilter= users.filter(user=>user.name.toLowerCase().includes(search));
    res.send(serchfilter);
    }
    else{
        res.send(users);
    }  
})


app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);
})

app.listen(port,()=>{
    console.log('site ranign is ',port);
})

