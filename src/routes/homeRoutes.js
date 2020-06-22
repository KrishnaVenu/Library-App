const express =require('express');
const homeRouter = express.Router();
function router(nav){
    homeRouter.get('/',function(req,res){
        res.render("home",
        {
            
         nav:[{link:'/authors',name:'Authors'},{link:'/books',name:'Books'}],
            title:'V.K.Library'
        });
    });
    return homeRouter;
}
module.exports = router;   
