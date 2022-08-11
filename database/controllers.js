const Note = require('./index.js');

module.exports = {
  getNotes() {
    return Note.find().exec();
  },

  addNoteOrUpdate(req, res) {

    return Note.findOneAndUpdate(
      {
        user: noteObj.user,
        text: noteObj.text,
        date: noteObj.date,
      },
      {
        user: noteObj.user,
        media: noteObj.media,
        mediaType: noteObj.mediaType,
        text: noteObj.text,
        favorite: noteObj.favorite,
        collection: noteObj.collection,
      },
      {
        upsert: true,
      },
    ).exec();
  },

};
