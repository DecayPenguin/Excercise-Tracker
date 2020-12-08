let express = require("express");
let mongoose = require("mongoose");
let morgan = require("morgan");
let app = express()

const PORT = process.env.PORT || 4040;


app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./Develop/public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./Develop/route/api.js"));
app.use(require("./Develop/route/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});