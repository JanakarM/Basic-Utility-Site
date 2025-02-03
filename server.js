const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/public/style.css');
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
