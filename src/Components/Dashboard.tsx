import { Header2 } from "./Common/Text";
import { Section } from "./Common/Container";
import { styled } from "styled-components";
import { useAppSelector } from "../Redux/ReduxHooks";
import useGetFilteredData from "../Hooks/useGetDataByStore";

const HeaderTextWrapper = styled.div`
  border-bottom: 1px solid black;
  width: 50%;
`;

export default function Dashboard() {
  const storeToShow = useAppSelector((state) => state.dataSlice.storeToShow);

  const { croissantData, breadData, pastryData, rollData } = useGetFilteredData(
    {
      store_id: storeToShow.id_store,
    }
  );

  return (
    <Section>
      <HeaderTextWrapper>
        <Header2>Dashboard</Header2>
      </HeaderTextWrapper>
    </Section>
  );
}
