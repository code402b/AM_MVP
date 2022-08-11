import React from 'react';
import styled from 'styled-components';

import { FlexContainer } from './Styles/styles_index.js';
import { TextSpawnButton } from './Buttons/button_index.js';
import { LogoutButton } from './Userfront.js';

export default function Footer({ getNewPoem }) {
  return (
    <StyledFooter>
      <TextSpawnButton clickHandler={getNewPoem} />
      <LogoutButton />
    </StyledFooter>
  );
}

const StyledFooter = styled(FlexContainer)`
  justify-content: space-evenly;
`;
