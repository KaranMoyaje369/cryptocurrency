import React from "react";
import CryptoTable from "../components/cryptos/components/cryptotables/CryptoTable";
import GlobalCryptoStats from "../components/cryptos/components/cryptostats/GlobalCryptoStats";
import TrendingCoins from "../components/cryptos/components/cryptostats/TrendingCoins";
import CryptoFilterCard from "../components/cryptos/components/cryptostats/CryptoFilterCard";

const LiveMarket = () => {
  return (
    <>
      <section
        className=""
        style={{
          backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
        }}
      >
        <div>
          <GlobalCryptoStats />
        </div>
        <div className="!container !mx-auto !my-5">
          <TrendingCoins />
        </div>
        <div className="!container !mx-auto !my-5">
          <CryptoTable />
        </div>
        <div className="!container !mx-auto !my-5 !mb-20">
          <CryptoFilterCard />
        </div>
      </section>
    </>
  );
};

export default LiveMarket;
