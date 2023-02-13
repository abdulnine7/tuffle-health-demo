
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let bills = [];

app.get('/', function (req, res) {
  res.send('Demp App for Medical Bill Upload Service Using NodeJS and Express!');
});

app.get('/items', (req, res) => {
    console.log(bill);
    res.json(bills); // Getting all the bills
});

app.post('/items', (req, res) => {
    let bill = req.body; // Getting the data from the body of POST request
    bills.push(bill);
    console.log(bill);
    res.json(bill);
});

app.listen(port, function () {
  console.log('Medical app listening on port 3000!');
});