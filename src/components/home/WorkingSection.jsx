import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Create New Account",
    description: "Get a high-security crypto wallet.",
    bgGradient: "linear-gradient(135deg, #667eea, #764ba2)",
    path: "/login-signup",
  },
  {
    id: 2,
    title: "Start Trading",
    description: "Invest, trade, and grow your portfolio.",
    bgGradient: "linear-gradient(to right, #43e97b, #38f9d7)",
    path: "/markets",
  },
  {
    id: 3,
    title: "See News",
    description: "Latest News about the Market Trends.",
    bgGradient: "linear-gradient(-20deg, #f794a4, #fdd6bd)",
    path: "/news",
  },
];

const WorkingSection = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <>
      <section className="!p-10 w-full">
        <div className="!space-y-8  !p-10 !my-8">
          <div className=" text-center">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold !p-2 shadow-md shadow-orange-500 inline-block !mb-5 text-white">
              How It Works?
            </h2>
          </div>

          <div>
            <Box
              sx={{
                width: "100%",
                display: "grid",
              }}
              className="!grid !grid-cols-1 md:!grid-cols-3 !gap-4"
            >
              {cards.map((card, index) => (
                <Card key={card.id}>
                  <NavLink to={card.path}>
                    <CardActionArea
                      onClick={() => setSelectedCard(index)}
                      data-active={selectedCard === index ? "" : undefined}
                      sx={{
                        height: "100%",
                        backgroundImage: card.bgGradient,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <CardContent sx={{ height: "100%" }}>
                        <Typography
                          variant="h5"
                          component="div"
                          className="text-center !font-bold"
                        >
                          {card.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="text-center !font-semibold"
                        >
                          {card.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </NavLink>
                </Card>
              ))}
            </Box>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingSection;
