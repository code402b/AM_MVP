const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const controller = require('../database/controllers.js');
const API = require('./API.js');

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/notes', controller.getNotes);
app.post('/notes', controller.addNoteOrUpdate);

app.get('/metAPISearch', API.getMETquery);
app.get('/metAPIObject', API.getMETobject);

app.get('/waltWhitmanPoem', API.getWaltWhitmanPoem);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
