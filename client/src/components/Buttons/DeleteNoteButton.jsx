import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Userfront from '@userfront/core';

import { ActionButton } from '../Styles/styles_index.js';

export default function DeleteNoteButton({ noteId, handleClick }) {
  return (
    <DeleteButton onClick={() => handleClick(noteId)}><div className="deleteButtonText">X</div></DeleteButton>
  );
}

const DeleteButton = styled(ActionButton)`
  display: inline-block;
  height: 24px;
  width: 24px;
`;
