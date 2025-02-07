import { Button, IconButton } from "@mui/material";
import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const pages = [
    { NavMenuItem: "About", path: "/about" },
    { NavMenuItem: "News", path: "/news" },
    { NavMenuItem: "Contact", path: "/contact" },
    { NavMenuItem: "Careers", path: "" },
    { NavMenuItem: "Legal & Privacy", path: "" },
  ];
  const developersLinks = [
    "Developer Platform",
    "Wallets",
    "Wallet SDK",
    "Coinbase App",
    "Exchange API",
  ];
  const supportLinks = [
    "Help Center",
    "Create Account",
    "ID Verification",
    "Payment Methods",
    "Supported Crypto",
  ];

  return (
    <footer className="w-full min-w-[300px] bg-gray-900 text-white ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-start lg:place-items-center !p-6">
        {/* Company Branding & Social Icons */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-bold text-xl">CryptoCurrency</h2>
          <div className="flex gap-3">
            <NavLink to="#">
              <IconButton>
                <FaFacebookSquare className="text-sky-500 text-3xl" />
              </IconButton>
            </NavLink>
            <NavLink to="#">
              <IconButton>
                <FaInstagram className="text-red-500 text-3xl" />
              </IconButton>
            </NavLink>
            <NavLink to="#">
              <IconButton>
                <FaTwitter className="text-blue-500 text-3xl" />
              </IconButton>
            </NavLink>
            <NavLink to="#">
              <IconButton>
                <ImWhatsapp className="text-green-500 text-3xl" />
              </IconButton>
            </NavLink>
          </div>
          <div className="flex items-center gap-4">
            <IconButton>
              <FaGlobe className="text-blue-500 text-3xl" />
            </IconButton>
            <p>Global | English</p>
          </div>
        </div>

        {/* Company Section */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Company</h2>
          {pages.map((page, id) => (
            <NavLink key={id} to={page.path} className="hover:text-gray-400">
              {page.NavMenuItem}
            </NavLink>
          ))}
        </div>

        {/* Developers Section */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Developers</h2>
          {developersLinks.map((link, index) => (
            <span key={index} className="hover:text-gray-400">
              {link}
            </span>
          ))}
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Support</h2>
          {supportLinks.map((link, index) => (
            <span key={index} className="hover:text-gray-400">
              {link}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="!mt-6 text-center text-sm border-t border-gray-700 !py-4">
        © {new Date().getFullYear()} CryptoCurrency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
