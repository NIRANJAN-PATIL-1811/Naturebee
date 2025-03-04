const UserData = require("./UserData.js");


const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cors());

app.use("/post", UserData);


app.listen(8000, 'localhost', (req, res) => {
  console.log("Server Is Running on http://localhost:8000");
});