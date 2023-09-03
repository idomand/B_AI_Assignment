import { useAppSelector } from "../Redux/ReduxHooks";

type Props = {
  store_id: number;
  product_id: number;
};

export default function useGetDataByProductAndStore({
  store_id,
  product_id,
}: Props) {
  const deliveriesData = useAppSelector(
    (state) => state.dataSlice.deliveriesData
  );
  const recommendationsData = useAppSelector(
    (state) => state.dataSlice.recommendationsData
  );
  const salesData = useAppSelector((state) => state.dataSlice.salesData);
  const arrayOfAllProductRecommended = recommendationsData.filter(
    (recommendation) => {
      return (
        recommendation.id_store == store_id &&
        recommendation.id_product == product_id
      );
    }
  );

  const arrayOfAllProductDelivered = deliveriesData.filter((recommendation) => {
    recommendation.delivery_qty;
    return (
      recommendation.id_store == store_id &&
      recommendation.id_product == product_id
    );
  });
  const arrayOfAllProductSales = salesData.filter((recommendation) => {
    return (
      recommendation.id_store == store_id &&
      recommendation.id_product == product_id
    );
  });

  const totalProductSales = arrayOfAllProductSales.reduce(
    (accumulator, salesObject) => accumulator + salesObject.sales_qty,
    0
  );
  const totalProductDemand = arrayOfAllProductSales.reduce(
    (accumulator, salesObject) => accumulator + salesObject.demand_qty,
    0
  );

  const totalProductDelivered = arrayOfAllProductDelivered.reduce(
    (accumulator, deliveredObject) =>
      accumulator + deliveredObject.delivery_qty,
    0
  );

  const totalProductRecommended = arrayOfAllProductRecommended.reduce(
    (accumulator, RecommendedObject) =>
      accumulator + RecommendedObject.recommendation,
    0
  );

  return {
    totalProductDelivered,
    totalProductRecommended,
    totalProductSales,
    totalProductDemand,
  };
}
