import { Button } from "@mui/material";
import heroImg from "../../assets/HeroSectionbgImg.jpg";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <main
        className="relative img-fluid h-auto bg-cover lg:bg-center bg-no-repeat !mt-[80px] !p-10"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Content */}
        <div className="relative h-[80vh] w-full flex flex-col gap-10 justify-center   font-bold capitalize">
          <div className="!space-y-[2rem]">
            <h2 className="text-orange-500 text-xl md:text-3xl lg:text-4xl text-center font-extrabold">
              Revolutionizing Digital Finance with Secure & Fast Transactions.
            </h2>
            <h3 className=" md:text-2xl text-gray-100 text-center">
              Join the future of decentralized finance with our next-gen
              cryptocurrency solutions.
            </h3>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 !my-5">
            <NavLink to={"/"}>
              <Button
                variant="contained"
                className="!bg-white !text-black !font-bold !tracking-wider !cursor-pointer"
              >
                Get Started
              </Button>
            </NavLink>
            <NavLink to={"/markets"}>
              <Button
                variant="contained"
                className="!bg-orange-500 hover:!bg-black !text-white !font-bold !tracking-wider !cursor-pointer"
              >
                View Market
              </Button>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
