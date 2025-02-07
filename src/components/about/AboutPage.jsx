import React from "react";
import Team1 from "../../assets/Testimonial-1.png";
import Team2 from "../../assets/Testimonial-3.png";
import Team3 from "../../assets/Testimonial-2.png";

import {
  FaCheckToSlot,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { IconButton } from "@mui/material";

const OurTeam = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    image: Team1,
    description:
      " With a visionary mindset and years of experience in blockchain development, John Doe leads the team toward innovation, ensuring secure, scalable, and efficient crypto solutions.",
    socialMedia: [
      { icon: <FaTwitter />, url: "https://twitter.com/johndoe" },
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/johndoe" },
      { icon: <FaGithub />, url: "https://github.com/johndoe" },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing & Content Creator",
    image: Team2,
    description:
      " With a passion for storytelling and creativity, Jane Smith brings her unique perspective to marketing and content creation, helping to promote Crypto Currency and drive growth.",
    socialMedia: [
      { icon: <FaTwitter />, url: "https://twitter.com/janesmith" },
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/janesmith" },
      { icon: <FaGithub />, url: "https://github.com/janesmith" },
    ],
  },
  {
    id: 3,
    name: "Mark Johnson",
    role: "Blockchain Developer",
    image: Team3,
    description:
      " With a deep understanding of blockchain technology, Mark Johnson leads the development team to create cutting-edge crypto solutions, ensuring seamless integration into the existing ecosystem.",
    socialMedia: [
      { icon: <FaTwitter />, url: "https://twitter.com/markjohnson" },
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/markjohnson" },
      { icon: <FaGithub />, url: "https://github.com/markjohnson" },
    ],
  },
];

const AboutPage = () => {
  return (
    <>
      <div className="">
        {/* Who We Are? */}
        <div
          className="!p-5 md:!p-10"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
          }}
        >
          <div className="!my-8 flex flex-col gap-10 flex-wrap items-start md:items-center ">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-orange-500 inline-block !pb- text-black">
              Who We Are?
            </h2>

            <h3 className="md:text-center text-gray-800 text-lg md:text-xl font-semibold">
              Empowering the Future of Decentralized Finance
            </h3>
            <h4 className="md:text-center text-gray-800 text-lg md:text-xl font-semibold">
              Innovating Blockchain for a Transparent & Secure Crypto World
            </h4>
            <h3 className="md:text-center text-black text-lg md:text-xl font-bold italic capitalize">
              "At Crypto Currency, we are revolutionizing the way people
              interact with digital assets. With cutting-edge blockchain
              technology and an intuitive platform, we provide secure, fast, and
              decentralized financial solutions for everyone."
            </h3>
          </div>
        </div>

        {/* Our Mission and Vision */}
        <div className="!p-5 md:!p-10">
          <div className="!my-8 flex flex-col gap-10 flex-wrap items-start md:items-center">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-orange-500 inline-block !pb- text-gray-300">
              Our Mission & Vision
            </h2>

            <h3 className="md:text-center text-purple-500 text-lg md:text-xl font-bold italic capitalize">
              "Our mission is to make cryptocurrency accessible, secure, and
              user-friendly for people worldwide. We believe in
              decentralization, financial inclusion, and empowering users with
              control over their digital assets."
            </h3>

            <h3 className="md:text-center text-gray-300 text-lg md:text-xl font-bold italic capitalize">
              "To create a borderless, decentralized ecosystem where
              transactions are instant, secure, and available to all."
            </h3>
          </div>
        </div>

        {/* Why Choose Us? */}
        <div
          className="!p-5 md:!p-10"
          style={{
            backgroundImage:
              "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
          }}
        >
          <div className="!my-8 flex flex-col gap-10 flex-wrap items-start md:items-center">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-orange-500 inline-block !pb- text-black">
              Why Choose Us?
            </h2>
            <div className="flex flex-col gap-6 justify-center flex-wrap text-gray-700 text-lg md:text-xl font-bold">
              <div className="flex items-center gap-6">
                <FaCheckToSlot className="text-orange-500" />
                <p>
                  Security First - Advanced encryption & multi-layer security.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <FaCheckToSlot className="text-orange-500" />
                <p>
                  Transparency - Fully decentralized & community-driven
                  governance.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <FaCheckToSlot className="text-orange-500" />
                <p>
                  Innovation - Constant improvements with blockchain technology.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <FaCheckToSlot className="text-orange-500" />
                <p>User-Centric Approach - Simplified crypto transactions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Teams */}
        <div className="!p-5 md:!p-10">
          <div className="!my-8 flex flex-col  gap-10 flex-wrap md:items-center">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-orange-500 inline-block !pb- text-gray-300">
              Our Team
            </h2>

            <h3 className="text-center text-gray-700 text-lg md:text-2xl font-bold">
              Meet the Founders & Experts
            </h3>

            <div className="flex justify-center md:flex-row flex-wrap gap-4">
              {OurTeam.map((item) => (
                <Card key={item.id} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt="Team Member"
                      sx={{ width: 200, height: 200 }}
                      className="!mx-auto"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="text-center"
                      >
                        {item.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        className="text-center"
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <div>
                    <div className="flex justify-center gap-2">
                      {item.socialMedia.map((link, id) => (
                        <a
                          key={id}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <IconButton size="small" className="!text-2xl">
                            {link.icon}
                          </IconButton>
                        </a>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Our Technology & Security */}
        <div
          className="!p-5 md:!p-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
          }}
        >
          <div className=" !my-8 flex flex-col gap-10 flex-wrap items-start md:items-center">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-red-500 inline-block !pb- text-black">
              Our Technology & Security
            </h2>

            <h3 className="md:text-center text-gray-800 text-lg md:text-xl font-bold italic capitalize">
              Blockchain-Powered Security: Multi-layer encryption, cold storage,
              and two-factor authentication (2FA).
            </h3>

            <h3 className="md:text-center text-gray-800 text-lg md:text-xl font-bold italic capitalize">
              Lightning-Fast Transactions: Powered by high-speed blockchain
              protocols.
            </h3>

            <h3 className="md:text-center text-gray-800 text-lg md:text-xl font-bold italic capitalize">
              Global Accessibility: Available in 100+ countries.
            </h3>
          </div>
        </div>

        {/* Join Our Community */}
        <div className="!p-5 md:!p-10">
          <div className=" !my-8 flex flex-col gap-10 flex-wrap items-start md:items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-orange-500 inline-block !pb- text-gray-300">
              Join Our Community
            </h2>

            <div className="md:text-center text-white text-lg md:text-2xl font-bold italic capitalize">
              <h3 className="text-blue-600 !mb-4 ">
                Follow Us on Social Media
              </h3>
              <p className="md:text-center text-blue-500 text-xl">
                <span>Twitter</span> | <span>Telegram</span> |{" "}
                <span>Discord</span> | <span>LinkedIn</span>
              </p>
            </div>
            <h3 className="md:text-center text-gray-800 text-lg md:text-2xl font-bold italic capitalize">
              Contact Us for Business Inquiries Email:support@yourcrypto.com
            </h3>

            {/* Link To Contact Us Page... */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
