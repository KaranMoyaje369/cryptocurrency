import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Card, CardContent, Typography, Box } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import StorefrontIcon from "@mui/icons-material/Storefront";

const roadmapData = [
  {
    title: "Q1 2023",
    description:
      "Project Launch & Whitepaper Release. Start marketing campaigns and build the community.",
    icon: <RocketLaunchIcon />,
    bgGradient: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
  },
  {
    title: "Q2 2023",
    description:
      "Token Pre-Sale & Exchange Listings. Secure partnerships with major exchanges.",
    icon: <TrendingUpIcon />,
    bgGradient: "linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)",
  },
  {
    title: "Q3 2023",
    description:
      "Smart Contract Development & Security Audits. Ensure a secure blockchain infrastructure.",
    icon: <CurrencyBitcoinIcon />,
    bgGradient:
      "linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)",
  },
  {
    title: "Q4 2023",
    description:
      "Mobile App & Web3 Wallet Integration. Enable seamless transactions and staking.",
    icon: <MobileFriendlyIcon />,
    bgGradient: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
  },
  {
    title: "Q1 2024",
    description:
      "NFT Marketplace & Staking Rewards. Introduce NFT utilities and DeFi yield farming.",
    icon: <StorefrontIcon />,
    bgGradient: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
  },
  {
    title: "Q2 2024",
    description:
      "Global Expansion & Multi-Chain Support. Enable cross-chain compatibility and increase adoption.",
    icon: <RocketLaunchIcon />,
    bgGradient:
      "linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)",
  },
  {
    title: "Q3 2024",
    description:
      "Crypto Payment Gateway & Merchants Onboarding. Bring real-world usage to crypto payments.",
    icon: <TrendingUpIcon />,
    bgGradient: "linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)",
  },
  {
    title: "Q4 2024",
    description:
      "DAO Governance & Community Voting. Empower users with governance rights and decentralized decision-making.",
    icon: <CurrencyBitcoinIcon />,
    bgGradient: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
  },
];

const Roadmap = () => {
  return (
    <section className="bg-gradient-to-t from-[#7028e4] to-[#e5b2ca] w-full !p-10">
      <div className=" !my-8">
        <div className="text-center">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-purple-500 inline-block !pb- text-black">
            Cryptocurrency Roadmap
          </h2>
        </div>
        <Box sx={{ maxWidth: 800, mx: "auto", mt: 5, p: 2 }}>
          <Timeline position="alternate">
            {roadmapData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="secondary" sx={{ fontSize: 30 }}>
                    {item.icon}
                  </TimelineDot>
                  {index !== roadmapData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Card
                    sx={{
                      p: 2,
                      boxShadow: 3,
                      borderRadius: 2,
                      backgroundImage: item.bgGradient,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </div>
    </section>
  );
};

export default Roadmap;
