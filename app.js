const express =require('express');
const homeRouter = express.Router();
const app = express();
const nav = [
    {
        link:'/login',name:'Login'
    },
    {
        link:'/registration',name:'Sign Up'
    }
];
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const booksRouter = require("./src/routes/bookRoutes")(nav);
app.use(express.static('./public'));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/home",homeRouter);
app.use("/authors",authorsRouter);
app.use('/books',booksRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'V.K.Library'
    });
});
app.get('/login',function(req,res){
    res.render("login",
    {
        nav,
        title:'V.K.Library -Login'
    });
});
app.get('/registration',function(req,res){
    res.render("registration",
    {
        nav,
        title:'V.K.Library-Registration'
    });
});
//function router(nav){
homeRouter.get('/',function(req,res){
    res.render("home",
    {
        
     nav:[{link:'/authors',name:'Authors'},{link:'/books',name:'Books'}],
        title:'V.K.Library'
    });
});
//}
app.listen(3222);
