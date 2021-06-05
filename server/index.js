const express = require('express')
const User = require('./models/user');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); 

mongoose.connect('mongodb://127.0.0.1:27017/user')
    .then(() => console.log('Db connected'))
    .catch(error => console.log(error))

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello')
})


app.get('/getusers', async(req, res) => {
    const user = await User.find();
    res.status(200).send(user);
})


app.post('/register', (req, res) => {

    const user = User(req.body)

    user.save()
    
    .then( backuser => {
        res.status(200).send(backuser)
    })
    .catch( err => {

        console.log(err)

        res.status(400).send(err)
    })
})

app.listen(5000, () => console.log('Server started')); 