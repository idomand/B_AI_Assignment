import { createSlice } from "@reduxjs/toolkit";
import { GlobalStateType, StoresObjectType } from "../global";
import storesData from "../db/stores.json";
import deliveriesData from "../db/deliveries.json";
import productsData from "../db/products.json";
import recommendationsData from "../db/recommendations.json";
import salesData from "../db/sales.json";

const initialState: GlobalStateType = {
  storesData: storesData,
  deliveriesData: deliveriesData,
  productsData: productsData,
  recommendationsData: recommendationsData,
  salesData: salesData,
  storeToShow: {
    id_store: 100790000,
    store_label: "Store Three",
    number_store: 3,
  },
};

export const DataSlice = createSlice({
  name: "DataSlice",
  initialState: initialState,
  reducers: {
    changeStoreView: (
      state,
      action: {
        type: string;
        payload: StoresObjectType;
      }
    ) => {
      state.storeToShow = action.payload;
    },
  },
});

export const { changeStoreView } = DataSlice.actions;
export default DataSlice.reducer;
