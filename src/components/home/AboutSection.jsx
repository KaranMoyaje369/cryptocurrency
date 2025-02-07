import AboutSecImg from "../../assets/AboutSectionBg.avif";
import { FaCheckSquare } from "react-icons/fa";

const AboutSection = () => {
  return (
    <>
      <section
        className="w-full !p-10"
        style={{
          backgroundImage: `url(${AboutSecImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className="!space-y-8 text-center">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-white inline-block !pb- text-white">
              About Us
            </h2>
            <h3 className="text-orange-500 text-xl md:text-2xl lg:text-3xl font-semibold ">
              Why Choose Us?
            </h3>
            <p className="text-gray-300 text-xl  font-semibold ">
              Our platform offers secure, fast, and low-fee cryptocurrency
              transactions powered by blockchain technology.
            </p>
          </div>

          <div className="flex justify-end text-gray-400 md:text-lg !mt-10">
            <div className="!p-10 !space-y-4">
              <div className="flex items-center gap-6">
                <FaCheckSquare /> <p>Decentralized & Secure</p>
              </div>
              <div className="flex items-center gap-6">
                <FaCheckSquare /> <p>Lightning-Fast Transactions</p>
              </div>
              <div className="flex items-center gap-6">
                <FaCheckSquare /> <p>Low Fees & Transparent Pricing</p>
              </div>
              <div className="flex items-center gap-6">
                <FaCheckSquare /> <p>Advanced Trading Tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
