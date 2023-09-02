import { Header2 } from "./Common/Text";
import { Section } from "./Common/Container";
import { styled } from "styled-components";

const HeaderTextWrapper = styled.div`
  border-bottom: 1px solid black;
  width: 50%;
`;

export default function Dashboard() {
  return (
    <Section>
      <HeaderTextWrapper>
        <Header2>Dashboard</Header2>
      </HeaderTextWrapper>
    </Section>
  );
}
