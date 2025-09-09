console.log('Web serverni boshlash');

const { log } = require('async');
const express = require('express');
const app = express();

//MongoDB connection
const db = require('./server').db();


// 1 kirish qismi
app.use(express.static('public')); // bu har qanday kirib keladigan malumot uchun public qismi ochiq degan manoni bildiradi
app.use(express.json()); // kirib kelayotgan json malumotlarni Object ga ogirib beradi
app.use(express.urlencoded({ extended: true })); //form dan biror bir malumotni post qilsak express qabil qilib oladi

// 2 Session code
// 3 backend da html ni yasab uni client ga yuboramiz
app.set('views', 'views'); // folder ni nomi
app.set('view engine', 'ejs');

// 4 routing codelari
app.post('/create-item', (req, res) => {
    console.log(req.body);
    res.json({ test: 'succes' });
});
app.get('/', function (req, res) {
    res.render('reja');
});

module.exports = app;
