import styled from "styled-components";

export const TaskWrapper = styled.div<{ isDragging: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  width: 95%;
  height: 80px;
  background-color: #515151a2;
  border-radius: 6px;

  cursor: pointer;
  z-index: 1;


  ${({ isDragging }) =>
    isDragging &&
    `border: 4px dashed #4f4f4faa;
    background-color: #51515171;
    color: #ffffff71;
  `}
`;