const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express()
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`App listening on http://mywebapp.norwayeast.cloudapp.azure.com:${port}`)
  console.log(`Or on http://20.100.193.177:${port}`)
  console.log(`Or on localhost:${port}`)
  console.log("CI/CD")
})