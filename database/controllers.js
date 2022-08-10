const MVP = require('./models.js');

module.exports = {
  getNotes() {
    return MVP.find().exec();
  },

  addNoteOrUpdate(noteObj) {
    return MVP.findOneAndUpdate(
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
        date: noteObj.date,
        favorite: noteObj.favorite,
        collection: noteObj.collection,
      },
      {
        upsert: true,
      },
    ).exec();
  },

};
