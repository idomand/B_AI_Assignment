import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import { Section } from "./Common/Container";
import GraphSelect from "./GraphSelect";
import getDateByStoreAndTime from "../utilities/getDateByStoreAndTime";

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
import { changeGraphView } from "../Redux/appSlice";
import { ProductName } from "../global";

const SectionGraph = styled(Section)`
  background-color: white;
`;

export default function Graph() {
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
      <GraphSelect options={options} onChange={changeGraphOnSelect} />
      <LineChart
        width={1030}
        height={250}
        data={data}
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
