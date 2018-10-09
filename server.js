const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const api = require("./routes/api");
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to DB
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('Mongo db connected !!!'))
.catch(err => console.log(err));

app.use('/api', api);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started at port ${port}`));
