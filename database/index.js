require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGDODB_HOST}/mvp`, { useNewUrlParser: true })
  .then(console.log('mongoose connected successfully'))
  .catch(err => console.log('mongoose connection error:', err));

const db = mongoose.connection;
db.on('error', () => {
  console.log('mongoose connection error');
});

const noteSchema = new mongoose.Schema(
  {
    user: { type: String, index: true },
    media: String,
    mediaType: { type: String, index: true },
    text: String,
    favorite: { type: Boolean, default: false, index: true },
    noteCollection: { type: String, index: true },
  },
  { timestamps: true },
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
