const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/photo-logs', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => {
  console.log('listening on port http://localhost:3000');
});
