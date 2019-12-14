const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jsonwebtokens = require('jsonwebtoken');
const fileUpload = require('express-fileupload');
const app = express();

const secret = 'hello world';

app.use(bodyParser());
app.use(fileUpload());

app.get('*.*', express.static(__dirname));

app.post('/api/login', function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  if (email === 'yariv@nerdeez.com' && password === '12345') {
    // usually we find the user from the database
    res.json({
      jwt: jsonwebtokens.sign({
        id: 1, // we can put the entire user here or just the pk
        email: 'yariv@nerdeez.com'
      }, secret, {expiresIn: 60 * 60})
    });
  } else {
    res.status(401).json({
      ERROR_CREDENTIALS: ['wrong credentials']
    })
  }
});

app.post('/upload', function(req, res) {
  if (!req.files) {
    return res.send(500).json({
      NO_FILES: ['No files were uploaded']
    });
  }
  const file = req.files.file;
  file.mv(path.resolve(__dirname, file.name), function(err) {
    if (err) {
      return res.status(500).json({
        MV_ERROR: [err]
      })
    }
    res.status(201).json({
      SUCCESS: ['File uploaded successfully']
    })
  })
});

app.get('/api/task',
  jwt({secret: secret}),
  function(req, res) {
  res.json([
    {
      id: 1,
      title: 'hello',
    },
    {
      id: 2,
      title: 'world',
    }
  ])
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
