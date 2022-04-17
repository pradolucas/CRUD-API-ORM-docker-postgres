const express = require('express');

const app = express();
app.use(express.json())
const port = 9001

const api = require('./api');
app.get('/users', api.read);
// app.get('/users/:id', api.getUserById);
app.post('/users/', api.insert);
app.put('/users/', api.update);
app.delete('/users/', api.del);

app.listen(port, "0.0.0.0", function() {
  console.log('Listening on port 9001')
})

