const express = require('express')
const app = express();
require("dotenv").config();
const Database = require('./database/Database')
const { readdirSync } = require("fs")

Database()
readdirSync("./routes").map((route) =>
    app.use("/api", require(`./routes/${route}`))
);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('running on ', PORT)
})