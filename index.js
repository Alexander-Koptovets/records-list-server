const express = require('express');
const recordRouter = require('./routers/recordRouter');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = 5000;

const app = express();

const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = `mongodb+srv://rss-feed:${DB_PASSWORD}@cluster0.rqdzcnq.mongodb.net/rss-feed?retryWrites=true&w=majority`;

app.use(express.json());
app.use('/', recordRouter);

const start = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();