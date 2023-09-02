import { styled } from "styled-components";

export const Section = styled.section`
  margin: 16px 0 24px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  background-color: white;
  padding: 36px;
  border-radius: 4px;
  border: solid 0.5px ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 50%;
`;
