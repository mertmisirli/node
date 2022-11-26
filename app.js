
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const path = require("path");


app.use(bodyParser.urlencoded({extended : false}));
app.use("/admin",adminRoutes);
app.use(userRoutes);

app.get("/", function(req, res, next){
    res.send("<h1>Hello From express.js</h1>");
});


app.use((req,res,next) =>{
    res.statusCode = 404;
    res.sendFile(path.join(__dirname, "./views/404.html"));
});

app.listen(3000, () => {
    console.log("listening")
});