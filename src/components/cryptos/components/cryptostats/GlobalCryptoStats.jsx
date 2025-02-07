import { Box, Typography } from "@mui/material";
import StatsData from "./StatsData";

const GlobalCryptoStats = () => {
  return (
    <>
      <Box
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          display: "flex",
          width: "100%", // Ensure it spans the full width,
        }}
      >
        <Typography
          component="span"
          sx={{
            display: "inline-block",
            animation: "marquee 10s linear infinite",
            "@keyframes marquee": {
              "0%": { transform: "translateX(100%)" },
              "100%": { transform: "translateX(-100%)" },
            },
          }}
        >
          <StatsData /> {/* Replace with your actual data */}
        </Typography>
      </Box>
    </>
  );
};

export default GlobalCryptoStats;
