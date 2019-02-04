const express = require('express');
const mongoose = require('mongoose');

require('./models/Loans');

mongoose.connect("mongodb://ash:pokemon1122@ds221435.mlab.com:21435/dvo-dev");

const app = express();

require('./routes/loadRoutes')(app);

const PORT = process.env.PORT || 5000

app.listen(PORT)