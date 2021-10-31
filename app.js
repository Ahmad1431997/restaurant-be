const express = require("express");
const app = express();
const db = require("./db/models");

const passport = require("passport");
const cors = require("cors");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

const userRoutes = require("./routes/userRoutes");

//middleware
app.use(cors());

app.use(express.json());

app.use(passport.initialize());

passport.use(localStrategy);

passport.use(jwtStrategy);


//routes
app.use(userRoutes);



//error middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});
//Path not found middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});


db.sequelize.sync()
// db.sequelize.sync({force:true})

app.listen(8080);
