const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const {authRoute} = require('./routes/auth');
require('dotenv').config()
connectToMongo();
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/auth',require(authRoute));

if (process.env.PORT) {
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port http://localhost:${process.env.PORT}`);
    });
}
module.exports = app;