import React from 'react';

import { ActionButton } from '../Styles/styles_index.js';

export default function SaveNoteButton({ clickHandler }) {
  return (
    <ActionButton onClick={clickHandler}>Save</ActionButton>
  );
}
