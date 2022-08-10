const mongoose = require('mongoose');

const mvpSchema = mongoose.Schema({
  user: { type: String, index: true },
  media: String,
  mediaType: { type: String, index: true },
  text: String,
  date: { type: Date, index: true },
  favorite: { type: Boolean, index: true },
  collection: { type: String, index: true },
});

const mvp = mongoose.model('MVP', mvpSchema);

module.exports = mvp;
