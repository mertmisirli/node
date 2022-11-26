
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");


app.use(bodyParser.urlencoded({extended : false}));
app.use("/admin",adminRoutes);
app.use(userRoutes);

app.get("/", function(req, res, next){
    res.send("<h1>Hello From express.js</h1>");
});


app.use((req,res,next) =>{
    res.statusCode = 404
    res.send(
        `
        <html>
        <body>
        <h1> PAGE NOT FOUND </h1>
        <p> Please Check Your Address</p>
        <button style="color:red">Anasayfaya Dön</button> 
        <body>
        </html>
        `)
});

app.listen(3000, () => {
    console.log("listening")
});