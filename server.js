console.log("Web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");

// 1 kirish qismi
app.use(express.static("public")); // bu har qanday kirib keladigan malumot uchun public qismi ochiq degan manoni bildiradi
app.use(express.json()); // kirib kelayotgan json malumotlarni Object ga ogirib beradi
app.use(express.urlencoded({ extended: true })); //form dan biror bir malumotni post qilsak express qabil qilib oladi

// 2 Session code
// 3 backend da html ni yasab uni client ga yuboramiz
app.set("views", "views"); // folder ni nomi
app.set("view engine", "ejs");

// 4 routing codelari
app.get("/home", function (req, res) {
  res.end(`<h1 style="background: red">Hello World by Otabek </h1>`);
});
app.get("/about", function (req, res) {
  res.end(`<h1 style="background: red">Siz About bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
});
