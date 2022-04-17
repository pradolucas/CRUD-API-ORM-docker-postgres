const { Router } = require('express');
const express = require('express');

const app = express();
app.use(express.json())
const port = 9001

const routUser = require('../routes/user.js');
const routComment = require('../routes/comment.js');
const routReport = require('../routes/report.js');
const routTrail = require('../routes/trail.js');
const routVideo = require('../routes/comment.js');

app.use('/', routUser);
app.use('/', routComment)
app.use('/', routReport)
app.use('/', routTrail)
app.use('/', routVideo)

app.listen(port, "0.0.0.0", function() {
  console.log('Listening on port 9001')
})

