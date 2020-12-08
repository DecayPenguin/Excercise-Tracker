const { Db } = require("mongodb");
const { db } = require("./models/workout");

module.exports = function(app) {
    app.get("./api/workouts", (req, res) => {
        Db.defaultMaxListeners.find({})
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        })
    })
    app.post("/api/workouts", (req, res) => {
        console.log(body);
        db.User.create(body)
        .then(dbLibrary);
    })
    .catch(err => {
        res.json(err);
    });
    app.post("api/workouts", ({body}, res) => {
        console.log(body);
        db.User.create(body)
        .then(dbLibrary => {
        })
        .catch(err => {
            res.json(err)
        });
    });
app.put("api/workouts:id", function(req, res) {
    console.log(req.body);
    db.User.update({_id: req.params.id} ,
        {
            $push: {
                exercises: req.body
            }
        })
        .then(function(dbImage) {
            res.json(dbImage);
        });
});
app.get("/api/workouts/range", (req, res) => {
    db.User.find({}).limit(5)
    .then(dbUser => {
        res.json(dbUser)
    })
    .catch(err => {
        res.json(err);
    })
})
};