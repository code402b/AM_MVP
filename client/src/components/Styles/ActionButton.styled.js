import styled from 'styled-components';

const ActionButton = styled.div`
  height: 48px;
  width: 48px;
  text-align: center;
  font-weight: bold;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  border: 1px solid #ccc;
  padding: 3px;
  margin: 8px;
  border-radius: 50%;
  &:hover {
    background-color: #f5f5f5;
  }
  cursor: pointer;
`;

export default ActionButton;
