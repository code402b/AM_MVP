require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const controller = require('../database/controllers.js');
const API = require('./API.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/notes', controller.getNotes);
app.post('/notes', controller.addNoteOrUpdate);

app.get('/metAPISearch', API.getMETquery);
app.get('/metAPIObject', API.getMETobject);

app.get('/waltWhitmanPoem', API.getWaltWhitmanPoem);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
