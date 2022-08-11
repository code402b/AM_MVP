import React from 'react';
import styled from 'styled-components';

import { FlexContainer } from './Styles/styles_index.js';
import { TextSpawnButton, ImageSpawnButton } from './Buttons/button_index.js';
// import { LogoutButton } from './Userfront.js';

export default function Footer({ getNewPoem, getNewImage }) {
  return (
    <StyledFooter>
      <TextSpawnButton clickHandler={getNewPoem} />
      <ImageSpawnButton clickHandler={getNewImage} />
    </StyledFooter>
  );
}

const StyledFooter = styled(FlexContainer)`
  flex-direction: row;
  justify-content: flex-start;

  width: 360px;
  margin: 10px;
`;
