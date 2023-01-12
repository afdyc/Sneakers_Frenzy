require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ShoeList = require("./routes/ShoeRoutes.js");
const UserList = require("./routes/UserRoutes.js");

const app = express();

// mongoose.connect(process.env.MONGODB);
mongoose.connect("mongodb://localhost:27017/sneakers_frenzy");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the database..."));

app.use(cors());
app.use(express.json());
app.use(ShoeList);
app.use(UserList);

app.listen(process.env.PORT, () => console.log("Backend server is running..."));
