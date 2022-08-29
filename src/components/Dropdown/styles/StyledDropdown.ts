import styled from "styled-components";
import { IconArrowDown } from "../../../icons";

export const DropdownContainer = styled.div`
  width: 100%;
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

interface iconProps {
  isOpen: boolean;
}

export const StyledIconArrowDown = styled(IconArrowDown)<iconProps>`
  transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};
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

export const DropdownList = styled.div`
  width: 100%;
  margin-top: 5px;
  background-color: white;
  border: 1px solid #cccc;
  border-radius: 5px;
`;

interface optionsProps {
  alignments: "left" | "right";
}
export const DropdownOption = styled.div<optionsProps>`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: ${({ alignments }) =>
    alignments === "left" ? "flex-start" : "flex-end"};
  cursor: pointer;
  &:hover {
    background-color: #cccc;
    color: red;
  }
`;
