var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/game", (req, res) => {
    res.render("game");
});

router.get("/community", (req, res) => {
    res.render("community");
})

module.exports = router;