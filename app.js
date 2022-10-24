const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/demoDb';

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const conn = mongoose.connection;

conn.on('open', () => {
    console.log('Connection done...');
})

app.use(express.json());

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)


app.listen(9000, () => {
    console.log('server started');
})
