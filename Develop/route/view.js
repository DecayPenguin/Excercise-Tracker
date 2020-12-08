const app = require("express").App();
const path = require ("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile("./public/exercise.html")
    })
    app.get("/", function(req, res) {
        res.sendFile(".public/stats.html")
    })
}