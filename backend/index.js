require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ShoeList = require("./routes/ShoeRoutes.js");
const UserList = require("./routes/UserRoutes.js");
const Cart = require("./routes/CartItemRoutes.js");
// const multer = require("multer");
// const fs = require("fs");
// const Shoes = require("./models/ShoeSchema.js");

const app = express();

mongoose.connect(process.env.MONGODB);
// mongoose.connect("mongodb://localhost:27017/sneakers_frenzy");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the database..."));

// defining our disk storage
// const Storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// defining file to be uploaded into DB
// const upload = multer({ storage: Storage });

app.use(cors());
app.use(express.json());
app.use(ShoeList);
app.use(UserList);
app.use(Cart);

// posting new shoe
// app.post("/", upload.single("shoeImg"), async (req, res) => {
//   const saveImage = await new Shoes({
//     name: req.body.name,
//     price: req.body.price,
//     picture: {
//       data: fs.readFileSync("uploads/" + req.file.filename),
//       contentType: "image/webp",
//     },
//   });
//   saveImage
//     .save()
//     .then((res) => console.log("new shoe is saved"))
//     .catch((err) => console.log(err));
// });

app.listen(process.env.PORT, () => console.log("Backend server is running..."));
