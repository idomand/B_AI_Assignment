import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import { Section } from "./Common/Container";
import GraphSelect from "./GraphSelect";
import getInsightsByProduct from "../utilities/getInsightsByProduct";

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
  width: 90%;
  margin: 16px auto 5px;
  border-radius: 8;
`;

const TextWrapper = styled.p`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export default function InsightsGraph() {
  const dispatch = useAppDispatch();
  const productsData = useAppSelector((state) => state.dataSlice.productsData);
  const storeToShow = useAppSelector((state) => state.dataSlice.storeToShow);

  const productToShow = useAppSelector(
    (state) => state.dataSlice.productToShow
  );

  const data = getInsightsByProduct({
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
      <div>
        <Header2>Insights Graph</Header2>
        <TextWrapper>
          The blue line represents the variance between the recommended quantity
          and the delivered quantity, while the smiley faces indicate how
          closely our recommendation aligns with the actual demand
        </TextWrapper>
      </div>
      <GraphSelect options={options} onChange={changeGraphOnSelect} />
      <LineChart
        width={1030}
        height={250}
        data={data}
        margin={{ top: 35, right: 70, left: 40, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="target_date">
          <Label value="date" offset={-15} position="insideBottomRight" />
        </XAxis>
        <YAxis>
          <Label value="Level of Variance" offset={10} position="top" />
        </YAxis>

        <Tooltip />
        <Legend layout="vertical" />
        <Line
          type="monotone"
          dataKey="variance"
          stroke="#8884d8"
          dot={<CustomizedDot />}
        />
        {/* <Line type="monotone" dataKey="delivery_qty" stroke="#82ca9d" />
        <Line type="monotone" dataKey="demand_qty" stroke="#d44242" /> */}
      </LineChart>
    </SectionGraph>
  );
}

const CustomizedDot: React.FunctionComponent<any> = (props: any) => {
  const { cx, cy, payload } = props;
  if (payload.IsBadRecommendation == false) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="green"
        viewBox="0 0 1024 1024"
      >
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill="red"
      viewBox="0 0 1024 1024"
    >
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    </svg>
  );
};
