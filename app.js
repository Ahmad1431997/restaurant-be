const express = require("express");
const app = express();
const db = require("./db/models");
const passport = require("passport");
const cors = require("cors");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const userRoutes = require("./routes/userRoutes");
const gallaryRoutes = require("./routes/gallaryRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const dishRoutes = require("./routes/dishRoutes")
const reservationRoutes = require("./routes/reservationRoutes")


const path = require("path");




//middleware
app.use(cors());

app.use(express.json());

app.use(passport.initialize());

passport.use(localStrategy);

passport.use(jwtStrategy);


//routes
app.use(userRoutes);
app.use(gallaryRoutes)
app.use(categoryRoutes)
app.use(dishRoutes)
app.use(reservationRoutes)

app.use("/media", express.static(path.join(__dirname, "media")));


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

// 
db.sequelize.sync()
// db.sequelize.sync({force:true})

app.listen(8080);