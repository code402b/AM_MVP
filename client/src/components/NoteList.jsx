import React from 'react';

import styled from 'styled-components';

import { DeleteNoteButton } from './Buttons/button_index.js';

export default function NoteList({
  notes,
  deleteNote,
  setInputText,
  setMedia,
}) {
  // console.log(notes);
  // const handleClick = () => {
  //   setInputText(note.text);
  //   let mediaObj = {
  //     title: note.mediaTitle,
  //     URL: note.media,
  //     smallURL: note.media,
  //   };
  //   setMedia()
  // };
  return (
    <ul>
      {notes.map((note) => (
        // eslint-disable-next-line no-underscore-dangle
        <li key={note._id}>
          <FlexRow>
            <div>
              <div>Note: {note.text}</div>
              {/* <div>|</div> */}
              <div>Title: {note.mediaTitle}</div>
            </div>
            <DeleteNoteButton noteId={note._id} handleClick={deleteNote} />
          </FlexRow>
        </li>
      ))}
    </ul>
  );
}

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 340px;
`;
