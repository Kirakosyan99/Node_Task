const mongoose = require("mongoose");
const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT;
const mongo_URL = process.env.DB_URL;

http.createServer(app);

mongoose.connect(mongo_URL)
    .then(() => {
        console.log("MongoDB Conected")
    })
    .catch(error => console.log("Connecting error -->", error));


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})