const express = require('express')
const User = require('./models/user');
const mongoose = require('mongoose');

const app = express(); 

mongoose.connect('mongodb://127.0.0.1:27017/user')
    .then(() => console.log('Db connected'))
    .catch(error => console.log(error))

app.get('/', (req, res) => {
    res.send('Hello')
})



app.listen(5000, () => console.log('Server started')); 