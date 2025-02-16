const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/public/index.html');
    res.send("Name: " + process.env.NAME);
});
app.get('/public', (req, res) => {
    res.sendFile(__dirname + '/public/' + req.query.id);
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
