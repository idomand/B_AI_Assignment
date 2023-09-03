import { useAppSelector } from "../Redux/ReduxHooks";

type Props = {
  store_id: number;
  product_id: number;
};

export default function getFilteredDataByStoreAndProduct({
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

  return {
    arrayOfAllProductRecommended,
    arrayOfAllProductDelivered,
    arrayOfAllProductSales,
  };
}
