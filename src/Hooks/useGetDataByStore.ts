import useGetDataByProductAndStore from "./useGetDataByProductAndStore";
type Props = {
  store_id: number;
};

export default function useGetDataByStore({ store_id }: Props) {
  const {
    totalProductRecommended: totalCroissantRecommended,
    totalProductDelivered: totalCroissantDelivered,
    totalProductDemand: totalCroissantDemand,
    totalProductSales: totalCroissantSales,
  } = useGetDataByProductAndStore({
    product_id: 100700034,
    store_id: store_id,
  });

  const {
    totalProductRecommended: totalBreadRecommended,
    totalProductDelivered: totalBreadDelivered,
    totalProductDemand: totalBreadDemand,
    totalProductSales: totalBreadSales,
  } = useGetDataByProductAndStore({
    product_id: 100700070,
    store_id: store_id,
  });

  const {
    totalProductRecommended: totalPastryRecommended,
    totalProductDelivered: totalPastryDelivered,
    totalProductDemand: totalPastryDemand,
    totalProductSales: totalPastrySales,
  } = useGetDataByProductAndStore({
    product_id: 100700080,
    store_id: store_id,
  });

  const {
    totalProductRecommended: totalRollRecommended,
    totalProductDelivered: totalRollDelivered,
    totalProductDemand: totalRollDemand,
    totalProductSales: totalRollSales,
  } = useGetDataByProductAndStore({
    product_id: 100700091,
    store_id: store_id,
  });

  const croissantData = {
    totalCroissantDelivered,
    totalCroissantRecommended,
    totalCroissantDemand,
    totalCroissantSales,
  };

  const breadData = {
    totalBreadDelivered,
    totalBreadRecommended,
    totalBreadDemand,
    totalBreadSales,
  };
  const pastryData = {
    totalPastryDelivered,
    totalPastryRecommended,
    totalPastryDemand,
    totalPastrySales,
  };
  const rollData = {
    totalRollDelivered,
    totalRollRecommended,
    totalRollDemand,
    totalRollSales,
  };

  return { croissantData, breadData, pastryData, rollData };
}
