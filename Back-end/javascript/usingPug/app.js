const { kMaxLength } = require('buffer');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const port = 80;

// express related stuff
app.use('/static',express.static('static')); // for serving static files
app.use(express.urlencoded())// for getting html forms data means urlencoded data


// pug related stuff
app.set('view engine', 'pug') // set the template engine as pug // you can use plain html in pug also but how will you receive message and title in this way?????????????? 
app.set('views',path.join(__dirname,'views')) // set the views directory


// endpoints

// with pug
// app.get('/demo', (req, res) => {
//     res.status(200).render('demo', { title: 'Hey there', style:'body{background-color: black; color: white;}' ,message: 'This is pug exploration' })
// })

// with pug but as plain html 
const con = "this is the content";
const something = {'title':'this is the title', 'content': con};
app.get('/demo',(req,res)=>{
    res.status(200).render('demo',something);
})

// getting the form data in an txt file
app.post('/',(req,res)=>{
    const something = {'title':'Form Submitted'};
    const formData = req.body;
    fs.writeFileSync('output/output.txt',`The name is ${formData.name}. The age is ${formData.age}. The contact is ${formData.contact}. The Adress is ${formData.address}.`)
    res.status(200).render('demo.pug',something);
})


// start the server 
app.listen(port, ()=>{
    console.log(`your server is at port ${port}`)
})