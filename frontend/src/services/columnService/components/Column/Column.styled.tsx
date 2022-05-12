import styled from "styled-components";

export const Wrap = styled.div<{ color: string | undefined }>`
  background-color: ${({ color }) => color};
  width: 200px;
  height: 400px;
  border-radius: 20px;
  margin: 0px 10px;
`;

export const NameWrapper = styled.div`
  display:flex;
  justify-content: center;

  padding-top:5px;
  font-size: 20px;
  color:white;
  `