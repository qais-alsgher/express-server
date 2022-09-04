`use strict`;

require('dotenv').config;
const express = require('express');
const { connect } = require('http2');
const app = express();

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
    res.status(201).send(`${parson.age}`);
})


function start(PORT) {
    app.listen(PORT, () => console.log(`server up ${PORT}`));

}

module.exports = {
    app: app,
    start: start
}