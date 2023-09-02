import useGetDataByProduct from "./useGetDataByProduct";
type Props = {
  store_id: number;
};

export default function useGetFilteredData({ store_id }: Props) {
  const {
    totalProductRecommended: totalCroissantRecommended,
    totalProductDelivered: totalCroissantDelivered,
    totalProductDemand: totalCroissantDemand,
    totalProductSales: totalCroissantSales,
  } = useGetDataByProduct({
    product_id: 100700034,
    store_id: store_id,
  });

  const {
    totalProductRecommended: totalBreadRecommended,
    totalProductDelivered: totalBreadDelivered,
    totalProductDemand: totalBreadDemand,
    totalProductSales: totalBreadSales,
  } = useGetDataByProduct({
    product_id: 100700070,
    store_id: store_id,
  });

  const {
    totalProductRecommended: totalPastryRecommended,
    totalProductDelivered: totalPastryDelivered,
    totalProductDemand: totalPastryDemand,
    totalProductSales: totalPastrySales,
  } = useGetDataByProduct({
    product_id: 100700080,
    store_id: store_id,
  });

  const {
    totalProductRecommended: totalRollRecommended,
    totalProductDelivered: totalRollDelivered,
    totalProductDemand: totalRollDemand,
    totalProductSales: totalRollSales,
  } = useGetDataByProduct({
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
