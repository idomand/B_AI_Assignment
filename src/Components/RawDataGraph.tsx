import { useAppSelector } from "../Redux/ReduxHooks";
import { Section } from "./Common/Container";
import GetRawDateByStoreAndTime from "../utilities/getRawDateByStoreAndTime";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import { styled } from "styled-components";
import { Header2 } from "./Common/Text";

const SectionGraph = styled(Section)`
  background-color: white;
  flex-direction: column;
  margin-top: 0;
  width: 90%;
  margin: 0 auto 5px;
  border-radius: 8px;
  border: solid grey 0.1px;
`;

export default function RawDataGraph() {
  const storeToShow = useAppSelector((state) => state.dataSlice.storeToShow);
  const productToShow = useAppSelector(
    (state) => state.dataSlice.productToShow
  );

  const data = GetRawDateByStoreAndTime({
    store_id: storeToShow.id_store,
    product_id: productToShow.id_product,
  });

  return (
    <SectionGraph>
      <Header2>Raw Data Per Product</Header2>
      <LineChart
        width={1030}
        height={250}
        data={data}
        margin={{ top: 35, right: 70, left: 40, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="target_date">
          <Label value="Date" offset={-15} position="insideBottomRight" />
        </XAxis>
        <YAxis>
          <Label value="Quantity" offset={15} position="top" />
        </YAxis>

        <Tooltip />
        <Legend layout="vertical" />
        <Line type="monotone" dataKey="recommendation" stroke="#8884d8" />
        <Line type="monotone" dataKey="delivery_qty" stroke="#82ca9d" />
        <Line type="monotone" dataKey="demand_qty" stroke="#d44242" />
      </LineChart>
    </SectionGraph>
  );
}
