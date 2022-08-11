import React from 'react';
import styled from 'styled-components';

import { FlexContainer } from './Styles/styles_index.js';
import {
  TextSpawnButton,
  ImageSpawnButton,
  SaveNoteButton,
  DiscardNoteButton,
} from './Buttons/button_index.js';
// import { LogoutButton } from './Userfront.js';

export default function Footer({
  getNewPoem,
  getNewImage,
  metIDs,
  postNote,
  setInputText,
}) {
  const randomImage = () => {
    const imageIdArray = metIDs.objectIDs;
    const randomID = Math.floor(Math.random() * metIDs.total);
    const randomImageID = imageIdArray[randomID];
    // console.log(randomImageID);
    getNewImage(randomImageID);
  };
  return (
    <StyledFooter>
      <TextSpawnButton clickHandler={getNewPoem} />
      <ImageSpawnButton clickHandler={randomImage} />
      <SaveNoteButton clickHandler={postNote} />
      <DiscardNoteButton clickHandler={setInputText} />
    </StyledFooter>
  );
}

const StyledFooter = styled(FlexContainer)`
  flex-direction: row;
  justify-content: flex-start;

  width: 360px;
  margin: 10px;
`;
