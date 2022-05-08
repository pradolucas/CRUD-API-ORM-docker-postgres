const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())
const port = 9001

const routesUser = require('../routes/user.js');
const routesComment = require('../routes/comment.js');
const routesReport = require('../routes/report.js');
const routesTrail = require('../routes/trail.js');
const routesVideo = require('../routes/video.js');
const routesLogin = require('../routes/login.js');

app.use('/', routesUser);
app.use('/', routesComment)
app.use('/', routesReport)
app.use('/', routesTrail)
app.use('/', routesVideo)
app.use('/', routesLogin)

app.listen(port, "0.0.0.0", function() {
  console.log('Listening on port 9001')
})

