import { useAppSelector } from "../Redux/ReduxHooks";
import { Section } from "./Common/Container";
import { Header1 } from "./Common/Text";

import useGetDateByStoreAndTime from "../Hooks/useGetDateByStoreAndTime";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { styled } from "styled-components";

type Props = {};

const SectionGraph = styled(Section)`
  background-color: white;
`;

export default function Graph({}: Props) {
  const storeToShow = useAppSelector((state) => state.dataSlice.storeToShow);
  const NewDataArray = useGetDateByStoreAndTime({
    store_id: storeToShow.id_store,
    product_id: 100700034,
  });

  return (
    <SectionGraph>
      <Header1>Graph</Header1>
      <LineChart
        width={1030}
        height={250}
        data={NewDataArray}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="target_date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="recommendation" stroke="#8884d8" />
        <Line type="monotone" dataKey="delivery_qty" stroke="#82ca9d" />
        <Line type="monotone" dataKey="demand_qty" stroke="#d44242" />
      </LineChart>
    </SectionGraph>
  );
}
