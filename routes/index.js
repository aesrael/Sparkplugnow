var express = require('express');
var router = express.Router();


/* GET homepage. */
router.get('/', isAuthenticated, function(req, res, next) {
  res.render('index');
});

function isAuthenticated(req,res,next){
  if (req.isAuthenticated()){
    return next();
  } 
   // req.flash('error_msg','You are not logged in');
    res.redirect('users/login');
}
module.exports = router;