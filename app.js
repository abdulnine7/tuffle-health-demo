
const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./utils.js')


const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let bills = [];

app.get('/', function (req, res) {
  res.send('App for Medical Bill Upload Service Using NodeJS and Express!');
});

app.get('/items', (req, res) => {
    console.log(bills);
    res.json(bills); // Sending all the bills
});

app.post('/items', (req, res) => {
    let bill = req.body; // Getting the data from the body of POST request
    console.log(bill);
    
    if (!utils.isValidBill(bill)) { // Checking if the bill contains all the required properties 
        res.status(400).json({ error: 'Invalid medical bill' });
        return;
    }

    bills.push(bill);
    res.json(bill); // Sending the newly added bill
});

app.listen(port, function () {
  console.log('Medical bill API listening on port 3000!');
});