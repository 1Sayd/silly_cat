const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express()
const port = process.env.PORT || 3000;

app.use(compression());
app.use(static(join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`{App listening on port ${port}`)
})