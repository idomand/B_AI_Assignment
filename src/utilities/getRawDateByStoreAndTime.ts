import {
  DeliveriesObjectType,
  RecommendationsObjectType,
  SalesObjectType,
} from "../global";
import getFilteredDataByStoreAndProduct from "./getFilteredDataByStoreAndProduct";

type Props = {
  store_id: number;
  product_id: number;
};

export default function getRawDateByStoreAndTime({
  store_id,
  product_id,
}: Props) {
  const {
    arrayOfAllProductDelivered,
    arrayOfAllProductRecommended,
    arrayOfAllProductSales,
  } = getFilteredDataByStoreAndProduct({
    product_id: product_id,
    store_id: store_id,
  });

  type MergedData = {
    target_date: string;
    id_store: number;
    id_product: number;
    recommendation: number;
    delivery_qty: number;
    sales_qty: number;
    demand_qty: number;
  };

  function combineArrays(
    array1: DeliveriesObjectType[],
    array2: RecommendationsObjectType[],
    array3: SalesObjectType[]
  ): MergedData[] {
    const map = new Map<string, MergedData>();

    // Populate the map with data from array1
    for (const item of array1) {
      const key = `${item.target_date}_${item.id_store}_${item.id_product}`;
      if (!map.has(key)) {
        map.set(key, {
          target_date: item.target_date,
          id_store: item.id_store,
          id_product: item.id_product,
          recommendation: 0, // Initialize with 0 for later addition
          sales_qty: 0, // Initialize with 0 for later addition
          demand_qty: 0, // Initialize with 0 for later addition
          delivery_qty: item.delivery_qty,
        });
      } else {
        const existingItem = map.get(key)!;
        existingItem.delivery_qty += item.delivery_qty;
      }
    }

    // Merge data from array2 into the map
    for (const item of array2) {
      const key = `${item.target_date}_${item.id_store}_${item.id_product}`;
      if (map.has(key)) {
        const existingItem = map.get(key)!;
        existingItem.recommendation = item.recommendation;
      }
    }
    // Merge data from array3 into the map
    for (const item of array3) {
      const key = `${item.target_date}_${item.id_store}_${item.id_product}`;
      if (map.has(key)) {
        const existingItem = map.get(key)!;
        existingItem.demand_qty = item.demand_qty;
        existingItem.sales_qty = item.sales_qty;
      }
    }
    // Convert the map values back to an array
    const resultArray = [...map.values()];

    return resultArray;
  }

  const mergeData = combineArrays(
    arrayOfAllProductDelivered,
    arrayOfAllProductRecommended,
    arrayOfAllProductSales
  );
  console.log("mergeData", mergeData);

  const formattedMergedData = mergeData.map((element) => {
    const [, month, day] = element.target_date.split("-");
    const newDate = `${day}-${month}`;
    element.target_date = newDate;
    return element;
  });
  return formattedMergedData;
}
