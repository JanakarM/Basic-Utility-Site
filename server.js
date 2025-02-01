const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!\nWelcome to My Node.js app simple');
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
