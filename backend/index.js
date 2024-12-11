const express = require("express");
const connectDB = require("./config/db");
const AppRouter = require("./routes/Userrouter")
const cors = require("cors");


require("dotenv").config();

const app = express();


app.use(cors());
app.use(express.json());
app.use("/", AppRouter);


app.get("/", (req, res) => {
  res.send("Welcome to the Server! 🌐");
});



connectDB();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

