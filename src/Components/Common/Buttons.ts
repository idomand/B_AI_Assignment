import styled from "styled-components";

const ButtonPrototype = styled.button`
  cursor: pointer;
  align-items: center;
  transition: 0.3s;
`;

export const BasicButton = styled(ButtonPrototype)`
  background-color: ${({ theme }) => theme.blueDark};
  color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.blueDark};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.typeScale.text_normal};
  font-weight: 500;
  padding: 5px 10px;
  margin: 4px 8px;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.blueDark};
  }
`;
