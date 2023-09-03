import React from "react";
import {
  DropdownItem,
  DropdownStyle,
  SelectContainer,
  SelectLabelButton,
} from "./Common/Select";

type Props = {};

export default function GraphSelect({}: Props) {
  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen}>
        {currentValue !== "" ? currentValue : label}
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value, index) => (
          <DropdownItem
            onClick={() => handleChange(value)}
            active={value === currentValue}
            key={index}
          >
            {value}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
}
