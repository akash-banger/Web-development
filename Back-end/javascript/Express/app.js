const express = require("express");
const path = require('path');
const app = express();
const port = 80;

// For serving static files
app.use('/static',express.static('static'));

// set the template engine as pug
app.set('view engine','pug');

// Set the views directory 
app.set('views',path.join(__dirname,'views'));

// our pug demo endpoint 
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey, I am Akash',style:'body{background-color: black; color: white;}', message: 'Hello there, dimag mat kha' })
})
// you can further learn more about pug 


app.get("/",(req,res)=>{
    res.send("This is the homepage of my first express app")
});
app.get("/about",(req,res)=>{
    res.send("This is the about page of my first express app")
})
app.get("/services",(req,res)=>{
    res.status(200).send("This is the services page of my first express app") // can snd status also
}) 
app.post("/about",(req,res)=>{
    res.send("This is a post request about page of my first express app")
})

app.listen(port,()=>{
    console.log(`The application is started successfully on port ${port}`);
})
