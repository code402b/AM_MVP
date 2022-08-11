import React from 'react';

export default function NoteList({ notes }) {
  return (
    <ul>
      {notes.map(note => (
        // eslint-disable-next-line no-underscore-dangle
        <li key={note._id}>
          <span>{note.text} |</span>
          <span>{note.mediaTitle}</span>
        </li>
      ))}
    </ul>
  );
}
