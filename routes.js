let express = require('express');

let router = express.Router();
let userController = require('./controllers/userControllers');
router.get('/',(req,res)=>res.redirect('/formation'));

router.get('/formation', userController.form);
router.get('/user',userController.enreg);
router.post('/user/new',userController.userNew);
// router.get('/panier',userController.voirpanier)


module.exports = router;
