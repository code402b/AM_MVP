const Note = require('./index.js');

module.exports = {
  getNotes(req, res) {
    console.log('hit get controller');
    Note.find({}).exec()
      .then((notes) => res.send(notes))
      .catch((err) => res.send(err));
  },

  addNoteOrUpdate(req, res) {
    const newNote = req.body;
    return Note.findOneAndUpdate(
      {
        user: newNote.user,
        text: newNote.text,
      },
      {
        user: newNote.user,
        userID: newNote.userID,
        mediaTitle: newNote.mediaTitle,
        media: newNote.media,
        mediaType: newNote.mediaType,
        text: newNote.text,
        favorite: newNote.favorite,
        collection: newNote.collection,
      },
      {
        upsert: true,
      },
    ).exec();
  },

};
