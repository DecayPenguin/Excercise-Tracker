const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3030

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true});
  app.get("/stats", (req, res) => {
      res.sendFile(path.join())
  })

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});