import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownContent,
  DropdownText,
  DropdownList,
  DropdownOption,
  StyledIconArrowDown,
} from "./styles/StyledDropdown";

export interface dropdownProps {
  children: string;
  alignments: "left" | "right";
  options: {
    text: string;
    onClick: Function;
  }[];
}

export const Dropdown: React.FC<dropdownProps> = ({
  children,
  options,
  alignments,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DropdownContainer onClick={() => setIsOpen((prevState) => !prevState)}>
        <DropdownContent>
          <DropdownText>{children}</DropdownText>
          <StyledIconArrowDown isOpen={isOpen} />
        </DropdownContent>
      </DropdownContainer>
      {isOpen && (
        <DropdownList>
          {options?.map((option) => (
            <DropdownOption
              onClick={() => {
                option?.onClick();
                setIsOpen(false);
              }}
              alignments={alignments}
            >
              {option?.text}
            </DropdownOption>
          ))}
        </DropdownList>
      )}
    </>
  );
};
