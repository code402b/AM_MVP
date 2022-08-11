import React from 'react';
import styled from 'styled-components';

export default function TextEntry({ inputText, setInputText }) {
  return (
    <StyledTextEntry>
      <textarea
        id="userText"
        rows="4"
        cols="42"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </StyledTextEntry>
  );
}

const StyledTextEntry = styled.div`
  border: 2px solid orange;
  width: 360px
`;
