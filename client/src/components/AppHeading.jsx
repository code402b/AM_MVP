import React from 'react';
import styled from 'styled-components';

export default function AppHeading() {
  return (
    <Heading>Leaves of Grass</Heading>
  );
}

const Heading = styled.h1`
  font-family: Avenir, Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-align: center;
`;
