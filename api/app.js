const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

//City data from https://simplemaps.com/data/us-cities
mongoose.connect(`mongodb://127.0.0.1:27017/weathercheck`, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors());

const checkDB = require('./addcities')
checkDB()

//Grabs ENV port or 5000
const port =  process.env.PORT || 5000;

const routes = require('./routes');

app.use('/api/v1', routes);

app.listen(port, () => console.log(`Listening on port localhost:${port}`))