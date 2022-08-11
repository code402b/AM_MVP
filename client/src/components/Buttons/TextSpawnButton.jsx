import React from 'react';

import { ActionButton } from '../Styles/styles_index.js';

export default function TextSpawnButton({ clickHandler }) {
  return (
    <ActionButton onClick={clickHandler}><div className="buttonText">Poem</div></ActionButton>
  );
}
