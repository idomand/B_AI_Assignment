import React, { useState } from "react";
import styled from "styled-components";
import { ProductName } from "../global";
import { Div } from "./Common/Container";

const CustomSelectWrapper = styled(Div)`
  position: sticky;
  top: 0;
  z-index: 5;
  border: none;
  width: 200px;
`;

const CustomSelectDropdown = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  appearance: none;
  cursor: pointer;
`;
const CustomSelectOption = styled.option`
  cursor: pointer;
`;

type Props = {
  options: ProductName[];
  onChange: (selectedOption: ProductName) => void;
};

export default function GraphSelect({ options, onChange }: Props) {
  const [selectedOption, setSelectedOption] =
    useState<ProductName>("Croissant");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: any = e.target.value;
    setSelectedOption(value);
    onChange(value);
  };
  return (
    <CustomSelectWrapper>
      <CustomSelectDropdown
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option: ProductName) => (
          <CustomSelectOption key={option} value={option}>
            {option}
          </CustomSelectOption>
        ))}
      </CustomSelectDropdown>
    </CustomSelectWrapper>
  );
}
