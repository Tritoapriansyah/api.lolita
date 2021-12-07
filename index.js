require("dotenv").config({ path: "./config.env" });
var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www'),
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js');
const errorHandler = require("./middleware/error");
const mongoose = require("mongoose")

(async function () {
    await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("Database connected.");
})();

var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')

var app = express()
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use(errorHandler);
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("assets"))

app.use('/', mainrouter)
app.use('/docs', apirouter)

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
