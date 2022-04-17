const express = require('express');

const app = express();
app.use(express.json())
const port = 9001

const api = require('./api');
app.get('/users/', api.getAllUsers);
app.get('/users/:id', api.getUserById);
app.post('/users/', api.addUser);
app.put('/users/', api.updateUser);
app.delete('/users/', api.deleteUser);

app.listen(port, "0.0.0.0", function() {
  console.log('Listening on port 9001')
})

