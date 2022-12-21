let session = require('express-session');


let  connection= require('../db') ;

exports.form = function(req, res){
    connection.query("select * from formation;", function(error, result){
        if (error) console.log(error);
    res.render('home.ejs', {academy1: result});
    });
}
exports.userNew = function(req,res){
    req.session.firstname = req.body.firstname;
    console.log(req.session);
    res.redirect('/formation');
}
exports.enreg = function(req, res){
    res.render('user.ejs',{firstname:""});// pour le moment il n'y a pas firstname donc je met -1
}
exports.voirpanier = function(req, res){
    res.render('panier.ejs');// pour le moment il n'y a pas firstname donc je met -1
}