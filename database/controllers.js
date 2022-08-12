const Note = require('./index.js');

module.exports = {
  getNotes(req, res) {
    Note.find({}).exec()
      .then((notes) => res.send(notes))
      .catch((err) => res.send(err));
  },

  deleteNote(req, res) {
    Note.findByIdAndRemove(req.params.id).exec()
      .then(() => res.send('Note deleted'))
      .catch((err) => res.send(err));
  },

  addNoteOrUpdate(req, res) {
    const newNote = req.body;
    return Note.findOneAndUpdate(
      {
        userID: newNote.userID,
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
    ).exec()
      .then((note) => res.send(note));
  },

};
