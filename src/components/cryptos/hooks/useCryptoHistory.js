import { useGetCryptoHistoryQuery } from "../services/CryptoMarkets";

const useCryptoHistory = (coinId, timePeriod = "3m") => {
  const { data, isLoading, isError } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  let history = data?.data?.history || [];
  return { data, isLoading, isError, history };
};

export default useCryptoHistory;
