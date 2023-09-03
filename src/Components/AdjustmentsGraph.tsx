import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import { Section } from "./Common/Container";
import GraphSelect from "./GraphSelect";
import getDateByStoreAndTime from "../utilities/getRawDateByStoreAndTime";

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
import { changeGraphView } from "../Redux/appSlice";
import { ProductName } from "../global";
import { Header2 } from "./Common/Text";

const SectionGraph = styled(Section)`
  background-color: white;
  flex-direction: column;
`;

export default function AdjustmentsGraph() {
  const dispatch = useAppDispatch();
  const productsData = useAppSelector((state) => state.dataSlice.productsData);
  const storeToShow = useAppSelector((state) => state.dataSlice.storeToShow);

  const productToShow = useAppSelector(
    (state) => state.dataSlice.productToShow
  );

  const data = getDateByStoreAndTime({
    store_id: storeToShow.id_store,
    product_id: productToShow.id_product,
  });

  const options: ProductName[] = [
    "Croissant",
    "Black bread",
    "Danish pastry",
    "Grain roll",
  ];

  function changeGraphOnSelect(selectedOption: ProductName) {
    const productPicked = productsData.find(
      (product) => product.name_product == selectedOption
    );
    if (productPicked) {
      dispatch(changeGraphView(productPicked));
    }
  }

  return (
    <SectionGraph>
      <Header2>Adjustments Graph</Header2>

      <GraphSelect options={options} onChange={changeGraphOnSelect} />
      <LineChart
        width={1030}
        height={250}
        data={data}
        margin={{ top: 35, right: 70, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="target_date">
          <Label value="date" offset={-15} position="insideBottomRight" />
        </XAxis>
        <YAxis>
          <Label value="quantity" offset={15} position="top" />
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
