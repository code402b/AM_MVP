import React from 'react';

import { ActionButton } from '../Styles/styles_index.js';

export default function DiscardNoteButton({ clickHandler }) {
  return (
    <ActionButton onClick={() => clickHandler('')}>Clear</ActionButton>
  );
}
