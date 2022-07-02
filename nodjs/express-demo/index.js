// const express = require('express');

// const app = express();

// app.get('/',(req,res)=>{
//     res.send('hello')

// });

// app.listen(3000,()=>console.log("conecter"));

// app.get('/api/courses',(req,res)=>{
//     res.send([1,2,3])
// })

const  Joi =require('joi');
const express = require("express");
const app = express();
app.use(express.json());

const courses =[
  {
    id:1,
    name:'khalil'
  },
  {
    id:2,
    name:'Ibrahima'
  }
]

app.get("/", (req, res) => {
  res.send('Hello Wordld');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.post('/api/courses', (req, res) => {
  const schema ={
    name:Joi.string().min(3).require()
  };

  const result=Joi.validate(req.body,schema);
  console.log(result);

  if(!req.body.name || req.body.name.length<3){
    res.status(400).send('Name is required and shoud ')
    return;
  }
const course =
  {
    id:courses.length+1,
    name:req.body.name
  }

  courses.push(course);
  res.send(course)

});


//PORT /api/course/1
app.get('/api/courses/:id', (req, res) => {
 const course= courses.find(c=> c.id===parseInt(req.params.id));
if(!course) {
  res.status(404).send("no fojund");

}else res.send(course);
});

// app.get('/api/post/:year/:month', (req, res) => {
//   res.send(req.params);
// });

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`connecter ${port} `);
});
