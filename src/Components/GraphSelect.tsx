import React, { useState } from "react";
import styled from "styled-components";
import { Header1 } from "./Common/Text";
import { ProductName } from "../global";
import { Div } from "./Common/Container";

// Define the styled components for the custom select
const CustomSelectWrapper = styled(Div)`
  /* position: relative; */
  border: none;
  width: 200px;
`;

const CustomSelectDropdown = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  appearance: none;
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
      <Header1>Product</Header1>

      <CustomSelectDropdown
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option: ProductName) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </CustomSelectDropdown>
    </CustomSelectWrapper>
  );
}
