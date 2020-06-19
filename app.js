const express =require('express');
const app = express();
app.use(express.static('./public'));
app.set("view engine","ejs");
app.set("views","./src/views");
//app.use('/books',booksRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav:[{link:'/login',name:'Login'},{link:'/registration',name:'Sign Up'}],
        title:'Library Management'
    });
});
app.get('/registration',function(req,res){
    res.render("registration",{
        nav:[{link:'/login',name:'Login'},{link:'/registration',name:'Sign Up'}],
        title:'Library Management-Registration'
    });
});
app.get('/registration',function(req,res){
    res.render("login",{
        nav:[{link:'/login',name:'Login'},{link:'/registration',name:'Sign Up'}],
        title:'Library Management-Login'
    });
});

app.listen(3222);