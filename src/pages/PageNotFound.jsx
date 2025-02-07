import React from "react";
import PageNotFoundBgImg from "../assets/PageNotFoundImg.jpg";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const PageNotFound = () => {
  return (
    <>
      <section
        className="h-screen w-full !p-5 !mt-[80px]"
        style={{
          backgroundImage: `url(${PageNotFoundBgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <NavLink to="/">
            <Button variant="contained">Go To Home</Button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
