import useCryptoStats from "../../hooks/useCryptoStats";
import BestCoins from "./BestCoins";
import NewestCoins from "./NewestCoins";

const TrendingCoins = () => {
  const { stats, isLoading, isError } = useCryptoStats();
  const { bestCoins = [], newestCoins = [] } = stats || {};

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div>
          <BestCoins
            bestCoins={bestCoins}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
        <div>
          <NewestCoins
            newestCoins={newestCoins}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </>
  );
};

export default TrendingCoins;
