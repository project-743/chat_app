const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connect=require('./config/db.js');
const userRoutes=require('./routes/userRoutes');
const app = express();
dotenv.config();
connect();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.use('/api/user',userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`SERVER STARTED ON PORT ${PORT}`));
