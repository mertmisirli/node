const express = require("express");
const router = express.Router();


router.use("/list-products", function(req,res, next){
    res.send("Ürünler Listelendi");
});


module.exports = router;