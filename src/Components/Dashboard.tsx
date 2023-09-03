import { Header2, Header3, TextLarge, TextNormal } from "./Common/Text";
import { Div, Section } from "./Common/Container";
import { styled } from "styled-components";
import { useAppSelector } from "../Redux/ReduxHooks";
import useGetDataByStore from "../utilities/getDataByStore";

const DashboardWrapper = styled(Section)`
  flex-direction: column;
`;

const HeaderTextWrapper = styled.div`
  border-bottom: 1px solid black;
  width: 50%;
`;

const ReportWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const StoreName = styled(Header3)`
  width: 180px;
  text-align: start;
`;

export default function Dashboard() {
  const storeToShow = useAppSelector((state) => state.dataSlice.storeToShow);

  const { croissantData, breadData, pastryData, rollData } = useGetDataByStore({
    store_id: storeToShow.id_store,
  });

  return (
    <DashboardWrapper>
      <HeaderTextWrapper>
        <Header2>Dashboard</Header2>
      </HeaderTextWrapper>
      <ReportWrapper>
        <StoreName>
          {storeToShow.store_label}: <br />
          Full Data
        </StoreName>
        <Div>
          <TextLarge>Croissant</TextLarge>
          <TextNormal>
            Recommended: {croissantData.totalCroissantRecommended}
          </TextNormal>
          <TextNormal>
            Delivered: {croissantData.totalCroissantDelivered}
          </TextNormal>
          <TextNormal>Demand: {croissantData.totalCroissantDemand}</TextNormal>
          <TextNormal>Sales: {croissantData.totalCroissantSales}</TextNormal>
        </Div>
        <Div>
          {" "}
          <TextLarge>Black bread</TextLarge>
          <TextNormal>
            Recommended: {breadData.totalBreadRecommended}
          </TextNormal>
          <TextNormal>Delivered: {breadData.totalBreadDelivered}</TextNormal>
          <TextNormal>Demand: {breadData.totalBreadDemand}</TextNormal>
          <TextNormal>Sales: {breadData.totalBreadSales}</TextNormal>
        </Div>
        <Div>
          {" "}
          <TextLarge>Danish pastry</TextLarge>
          <TextNormal>
            Recommended: {pastryData.totalPastryRecommended}
          </TextNormal>
          <TextNormal>Delivered: {pastryData.totalPastryDelivered}</TextNormal>
          <TextNormal>Demand: {pastryData.totalPastryDemand}</TextNormal>
          <TextNormal>Sales: {pastryData.totalPastrySales}</TextNormal>
        </Div>
        <Div>
          {" "}
          <TextLarge>Grain roll</TextLarge>
          <TextNormal>Recommended: {rollData.totalRollRecommended}</TextNormal>
          <TextNormal>Delivered: {rollData.totalRollDelivered}</TextNormal>
          <TextNormal>Demand: {rollData.totalRollDemand}</TextNormal>
          <TextNormal>Sales: {rollData.totalRollSales}</TextNormal>
        </Div>
      </ReportWrapper>
    </DashboardWrapper>
  );
}
