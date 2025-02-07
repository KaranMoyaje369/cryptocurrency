import React from "react";
import AppStoreImage from "../../assets/AppStore.png";
import GPlayStoreImage from "../../assets/GPlayStore.webp";
import AppDownloadImage from "../../assets/AppDownload.svg";
import PlayStoreSectionBgImg from "../../assets/PlayStoreSection.jpg";

const playstoreData = {
  title: "Get the Crypto App",
  subtitle: "Trade, Stake, and Manage Crypto on the Go!",
  description:
    "Download our official mobile app to securely buy, sell, and stake your favorite cryptocurrencies anytime, anywhere. Enjoy real-time market tracking, fast transactions, and industry-leading security.",
  features: [
    "🔐 Secure Wallet & Transactions",
    "⚡ Real-time Price Alerts",
    "📈 Buy, Sell & Trade Instantly",
    "🏦 Staking & Earning Rewards",
    "🎯 User-friendly Interface",
    "🛡️ 24/7 Support & Security",
  ],
  playStoreLink: "",
  appStoreLink: "",
  appPreviewImage: "",
};

const PlayStoreSection = () => {
  return (
    <>
      <section
        className=" w-full !p-10"
        style={{
          backgroundImage: `url(${PlayStoreSectionBgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="!my-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold!p-2 shadow-md shadow-blue-500 inline-block text-white font-bold !p-3 !mb-10">
              {playstoreData.title}
            </h2>
          </div>
          <div className=" !p-10 flex flex-col md:flex-row md:justify-between  gap-4">
            <div className=" flex flex-col flex-wrap gap-10">
              <h3 className="text-orange-500 text-xl md:text-2xl lg:text-3xl font-semibold">
                {playstoreData.subtitle}
              </h3>
              <div className="text-white text-base md:text-lg lg:text-xl font-semibold">
                <ul className="flex flex-col gap-4 flex-wrap">
                  {playstoreData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <a href={playstoreData.playStoreLink}>
                  <img
                    src={GPlayStoreImage}
                    alt="Get it on Google Play"
                    className="h-[50px] md:h-[70px] w-[150px] md:w-[250px]  rounded-lg"
                  />
                </a>
                <a href={playstoreData.appStoreLink}>
                  <img
                    src={AppStoreImage}
                    alt="Download on the App Store"
                    className="h-[50px] md:h-[70px] w-[150px] md:w-[250px]  rounded-lg"
                  />
                </a>
              </div>
            </div>
            <div>
              <img
                src={AppDownloadImage}
                alt="app download"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  background: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayStoreSection;
