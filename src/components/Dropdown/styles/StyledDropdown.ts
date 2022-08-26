import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 100px;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  border: 1px solid transparent;
  background-color: #b22222;
  cursor: pointer;
  &:hover {
    filter: brightness(1.75);
    transition: 0.3s;
  }
`;

export const DropdownContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const DropdownText = styled.span`
  color: white;
`;
