process.env.NODE_ENV = process.env.NODE_ENV || "development";

const express = require("express");
const app = express();
const router = require("./routes/index");

app.use("/", router);

app.listen(3000);
console.log("Server running at http://localhost:3000");
