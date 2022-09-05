`use strict`;

require('dotenv').config;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.post('/person', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    const gender = req.query.gender;
    const addAge = +age + 5;
    const parson = {
        name: name,
        age: addAge,
        gender: gender,

    }
    res.status(201).send(`${addAge}`);
})


function start(PORT) {
    app.listen(PORT, () => console.log(`server up ${PORT}`));

}

module.exports = {
    app: app,
    start: start
}