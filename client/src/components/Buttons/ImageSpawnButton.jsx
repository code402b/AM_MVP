import React from 'react';

import { ActionButton } from '../Styles/styles_index.js';

export default function ImageSpawnButton({ clickHandler }) {
  return (
    <ActionButton onClick={clickHandler}><div className="buttonText">Image</div></ActionButton>
  );
}
