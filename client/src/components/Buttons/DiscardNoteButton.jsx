import React from 'react';

import { ActionButton } from '../Styles/styles_index.js';

export default function DiscardNoteButton({ setInputText, setMedia }) {
  const handleClick = () => {
    setInputText('');
    setMedia({});
  };
  return (
    <ActionButton onClick={handleClick}><div className="buttonText">Clear</div></ActionButton>
  );
}
