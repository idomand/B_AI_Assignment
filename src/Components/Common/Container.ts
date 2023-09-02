import { styled } from "styled-components";

export const Section = styled.section`
  margin: 16px 0 24px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  min-width: 182px;
  margin: 8px;
  background-color: white;
  padding: 8px;
  border-radius: 4px;
  border: solid 0.5px ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
