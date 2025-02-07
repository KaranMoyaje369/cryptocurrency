import { Button, Input } from "@mui/joy";
import React from "react";
import { NavLink } from "react-router-dom";

const ContactSection = () => {
  return (
    <>
      <section className="w-full !p-10">
        <div className="text-center !mb-5">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-orange-500 inline-block">
            Let's Connect With Us
          </h2>
        </div>
        <div className="!space-y-8 !p-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <input className="!bg-transparent  shadow-md border border-orange-500 shadow-orange-500 !p-2 text-white rounded-full w-full"></input>
            <NavLink to="/contact">
              <Button
                type="submit"
                variant="contained"
                className="!text-white !bg-orange-500"
              >
                Connect
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
