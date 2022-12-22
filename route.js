var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/game", (req, res) => {
    res.render("game");
});

// Blockchain
router.get("/nft", (req, res) => {
    res.render("Blockchain/nft");
})
router.get("/whitepaper", (req, res) => {
    res.render("Blockchain/whitepaper");
})
router.get("/token", (req, res) => {
    res.render("Blockchain/token");
})

// News
router.get("/devlog", (req, res) => {
    res.render("News/devlog");
})
router.get("/versions", (req, res) => {
    res.render("News/versions");
})

// Community
router.get("/community", (req, res) => {
    res.render("Community/community");
})
router.get("/event", (req, res) => {
    res.render("Community/event");
})
router.get("/highlight", (req, res) => {
    res.render("Community/highlight");
})
router.get("/socialmedia", (req, res) => {
    res.render("Community/socialmedia");
})

// About Us
router.get("/aboutus", (req, res) => {
    res.render("AboutUs/aboutus");
})
router.get("/vision", (req, res) => {
    res.render("AboutUs/vision");
})
router.get("/joinus", (req, res) => {
    res.render("AboutUs/joinus");
})

module.exports = router;