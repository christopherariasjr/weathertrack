const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
app.use(cors());

const { exec } = require("child_process");
exec("node addcities.js", (err, stout, stderr) => {
    if (err) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
})

const dbURL =  'mongodb://localhost:27017/weathercheck'

//City data from https://simplemaps.com/data/us-cities
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })

//Grabs ENV port or 5000
const port =  process.env.PORT || 5000;

const routes = require('./routes');
const { stderr } = require('process');

app.use('/api/v1', routes);

app.listen(port, () => console.log(`Listening on port localhost:${port}`))