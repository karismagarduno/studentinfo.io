const express = require('express');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');


//app object of express
const app = express();

//connect mongoose with localhost:27017
mongoose.connect('mongodb://localhost:27017/UserData');


//working with body-parser
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

// set port number
const port = 3000;
//exports schema
const User = require("./model/user")

// set ejs engine
app.set("view engine", "ejs");

// get index.ejs file
app.get ('/' , (req , res)=>{
    res.render("index");
})

// post the form values in the database
app.post('/',  async(req, res) =>{
    const data = new User(req.body)
   await data.save()
   res.redirect("/show")
})

//Search Bar
app.post("/Search", function (req, res) {
    const Search = req.body.search;
    const search = User.findOne({ name: Search }).exec()
    search.then(function (doc) {
        res.redirect('/show/' + doc._id + '/edit/');
    })
    .catch(err => {
        res.redirect('/show')
    });
});


app.get('/show', async(req,res)=>{
    const items = await User.find({})
    res.render('show', {items :items})
});



app.get('/show/:id/edit', async(req,res)=>{
    const {id} = req.params;
    const items = await User.findById(id)
    res.render('edit', {items})
})


app.put('/show/:id', async(req,res)=>{
    const {id} = req.params;
    const items = await User.findByIdAndUpdate(id, req.body ,{runValidors :true , new :true})
    res.redirect('/')
})

app.delete('/show/:id', async(req,res)=> {
    const {id} = req.params;
    const deleteItem = await User.findOneAndDelete(id)
    res.redirect("/show")
    
    
    
})

app.get('/search', (req,res)=> {
    res.render('search', {product:""});
});

app.get('/product', (req,res)=> {
    let searchQuery = {Product_Name: req.query.Product_Name };

    product.findOne(searchQuery)
    .then(product => {
        console.log(product.Product_Name);
        res.sender('search', {product:product});
    })
    .catch(err => {
        req.flash('error_msg', 'ERROR:' +err)
        res.redirect('/');
    });
})


app.use(express.static('public'))




// Active server at port 3000
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
}) 

