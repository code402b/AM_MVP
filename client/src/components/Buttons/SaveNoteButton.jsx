import React from 'react';
import Userfront from '@userfront/core';

import { ActionButton } from '../Styles/styles_index.js';

export default function SaveNoteButton({ clickHandler }) {
  return (
    <ActionButton onClick={() => console.log(Userfront.user)}>Save</ActionButton>
  );
}
