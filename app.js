console.log('Web serverni boshlash');

const { log } = require('async');
const express = require('express');
const app = express();

//MongoDB connection
const db = require('./server');

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
    console.log('user entered /create-item');
    const new_reja = req.body.reja; // yangi rejamiz req.body dan keladigan malumotlarga teng
    db.collection('plans').insertOne({ reja: new_reja }, (err, data) => {
        //inserOne bitta qoshish degani u 2ta parametr oladi birinchisi nmani qoshmoqchiligimiz,
        // 2- si callback((err, data)) boladi error bolsa error ni chiqarsin error bolmasa datani chiqarsin degani
        if (err) {
            console.log(err);
            res.end('Something went wrong'); // natijani chiqarish
        } else {
            res.end('Succesfully added');
        }
    });
});
app.get('/', function (req, res) {
    console.log('user entered /');

    db.collection('plans')
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end('Something went wrong');
            } else {
                console.log(data);
                res.render('reja', { items: data });
            }
        });
});
module.exports = app;
