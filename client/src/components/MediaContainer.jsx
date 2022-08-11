import React from 'react';
import styled from 'styled-components';

export default function MediaContainer({ media }) {
  if (media.type === 'image') {
    return (
      <div>
        <h3>{media.title}</h3>
        <img src={media.smallURL} alt={media.title} />
      </div>
    );
  }
  if (media.type === 'text') {
    return (
      <StyledMediaContainer>
        <h3>{media.title}</h3>
        <div>{media.text}</div>
      </StyledMediaContainer>
    );
  }
}

const StyledMediaContainer = styled.div`
  border: 2px solid orange;
  width: 360px;
  min-height: 200px;
`;
