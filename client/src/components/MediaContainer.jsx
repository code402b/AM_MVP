import React from 'react';
import styled from 'styled-components';

export default function MediaContainer({ media }) {
  return (
    <StyledMediaContainer>
      <h3>{media.title}</h3>
      <div>{media.text}</div>
    </StyledMediaContainer>
  );
}

const StyledMediaContainer = styled.div`
  border: 2px solid orange;
  width: 360px;
  height: 200px;
`;
