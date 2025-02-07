import FeatureSecBgImg from "../../assets/FeatureSectionBg.jpg";

const FeaturesSection = () => {
  return (
    <>
      <section
        className="w-full !p-10"
        style={{
          backgroundImage: `url(${FeatureSecBgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="!my-8">
          <div className="text-center">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-blue-500 inline-block !pb- text-black">
              Features
            </h2>
          </div>

          <div className="flex justify-end !mt-10">
            <div className=" !p-10 !space-y-4">
              <h3 className="text-2xl font-bold ">Key Features:</h3>

              <p className="md:text-lg font-semibold">
                💰 Buy, Sell & Trade Crypto with Ease{" "}
              </p>
              <p className="md:text-lg font-semibold">
                📈 Advanced Analytics & Market Insights
              </p>
              <p className="md:text-lg font-semibold">
                🛡️ High-Security Encryption & Wallet Protection
              </p>
              <p className="md:text-lg font-semibold">
                🤖 AI-Powered Trading Bots
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
