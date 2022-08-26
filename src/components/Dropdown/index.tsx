import React from "react";
import { IconArrowDown } from "../../icons";
import {
  DropdownContainer,
  DropdownContent,
  DropdownText,
} from "./styles/StyledDropdown";

export const Dropdown: React.FC = () => {
  return (
    <DropdownContainer>
      <DropdownContent>
        <DropdownText>Abrir</DropdownText>
        <IconArrowDown />
      </DropdownContent>
    </DropdownContainer>
  );
};
