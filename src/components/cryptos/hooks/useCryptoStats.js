import { useGetCryptoStatsQuery } from "../services/CryptoMarkets";

const useCryptoStats = () => {
  const { data, isLoading, isError } = useGetCryptoStatsQuery();

  if (isError) {
    console.error("Error fetching data:", data);
    return { data: null, isLoading: false, isError: true, stats: {} };
  }

  if (isLoading) {
    return { data: null, isLoading: true, isError: false, stats: {} };
  }

  const stats = data?.data || {};
  // console.log("stats:", stats);
  return { data, isLoading, isError, stats };
};

export default useCryptoStats;
