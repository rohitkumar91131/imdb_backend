const express = require("express");
const app = express();
require("./models/db");
const cors = require("cors");
const moviesRoutes = require("./routes/movieRoutes")
app.use(cors());
app.use("/movies", moviesRoutes);

app.listen(3000,()=>{
    console.log("App has started and running on 3000");
})