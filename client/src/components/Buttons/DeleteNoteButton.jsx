import React from 'react';

import { ActionButton } from '../Styles/styles_index.js';

export default function DiscardNoteButton({ }) {
  const handleClick = () => {
  };
  return (
    <ActionButton onClick={handleClick}><div className="buttonText">Clear</div></ActionButton>
  );
}
