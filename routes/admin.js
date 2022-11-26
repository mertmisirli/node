
const express = require("express");
const router = express.Router();


router.use("/add-product", function (req,res,next) {
    res.send("Ürün Ekleme Sayfası");
});

module.exports = router;
