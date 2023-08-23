const express = require("express");
const { getHome } = require("../controllers/home/homeController");
const router = express.Router();

router.use((req, res, next) => {
    // console.log('middleware section');
    next(); // to call the next middleware
});

router.use((req, res, next) => {
    // console.log('middleware section 2');
    next();
});

router.get('/', getHome); 
module.exports = router;