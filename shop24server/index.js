const express = require('express')
const app = express();
require("dotenv").config();
const Database = require('./database/Database')
const { readdirSync } = require("fs")
const cors = require("cors");

Database()
readdirSync("./routes").map((route) =>
    app.use("/api", require(`./routes/${route}`))
);
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('running on ', PORT)
})