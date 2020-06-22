const express =require('express');
const nav2 =[
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/books',name:'Books'
    }
];
const homeRouter = express.Router();
function router(nav2){
    homeRouter.get('/',function(req,res){
        res.render("home",
        {
            nav2,
            title:'V.K.Library'
        });
    });
    return homeRouter;
} 
module.exports = router;   
