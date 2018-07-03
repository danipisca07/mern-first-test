var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin00@ds161710.mlab.com:61710/danipisca07devtest');

var TestObj = mongoose.model('Test', { name : String});

var test1 = new TestObj({name: 'Nome1'});

//
// test1.save(function (err){
//     if(err)
//         console.log(err);
//     else
//         console.log('salvato');
// });

app.get('/', function (req,res){
});