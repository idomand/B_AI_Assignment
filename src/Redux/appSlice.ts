import { createSlice } from "@reduxjs/toolkit";
import {
  GlobalStateType,
  StoresObjectType,
  ProductsObjectType,
} from "../global";
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
  productToShow: {
    id_product: 100700034,
    name_product: "Croissant",
    number_product: 22,
    price: 1.8,
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
    changeGraphView: (
      state,
      action: {
        type: string;
        payload: ProductsObjectType;
      }
    ) => {
      state.productToShow = action.payload;
    },
  },
});

export const { changeStoreView, changeGraphView } = DataSlice.actions;
export default DataSlice.reducer;
