import { useGetCryptoMarketsQuery } from "../services/CryptoMarkets";

const useCryptoMarkets = () => {
  const { data, isLoading, isError } = useGetCryptoMarketsQuery();
  // optional chaining
  let coins = data?.data?.coins || [];
  let globalStats = data?.data?.stats || {};

  // console.log("Coins Data: ", coins);
  // console.log("Global Coins Data: ", globalStats);

  return {
    coins,
    isLoading,
    isError,
    globalStats,
  };
};

export default useCryptoMarkets;
