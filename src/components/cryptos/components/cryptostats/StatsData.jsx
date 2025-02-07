import * as React from "react";
import PropTypes from "prop-types";
import { styled, useThemeProps } from "@mui/material/styles";
import useCryptoMarkets from "../../hooks/useCryptoMarkets";
import millify from "millify";

const StatRoot = styled("div", {
  name: "MuiStat",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  letterSpacing: "-0.025em",
  fontWeight: 600,
  variants: [
    {
      props: { variant: "outlined" },
      style: {
        border: `2px solid ${theme.palette.divider}`,
        boxShadow: "none",
      },
    },
  ],
}));

const StatValue = styled("div", {
  name: "MuiStat",
  slot: "value",
})(({ theme }) => ({
  ...theme.typography.h4,
}));

const StatUnit = styled("div", {
  name: "MuiStat",
  slot: "unit",
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const Stat = React.forwardRef(function Stat(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "MuiStat" });
  const { value, unit, isLoading, isError, ...other } = props;

  return (
    <StatRoot ref={ref} {...other}>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <>
          <p className="text-gray-500">Error Fetching Data.</p>
          <StatValue>{value}</StatValue>
          <StatUnit>{unit}</StatUnit>
        </>
      ) : (
        <>
          <StatValue>{value}</StatValue>
          <StatUnit>{unit}</StatUnit>
        </>
      )}
    </StatRoot>
  );
});

Stat.propTypes = {
  unit: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(["outlined"]),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

export default function StatsData() {
  const { globalStats, isLoading, isError } = useCryptoMarkets();
  const {
    totalCoins,
    totalMarkets,
    total24hVolume,
    totalMarketCap,
    totalExchanges,
  } = globalStats || {};

  const stats = [
    { value: millify(totalCoins || 0), unit: "Total Coins" },
    { value: millify(totalMarkets || 0), unit: "Total Markets" },
    { value: millify(total24hVolume || 0), unit: "Volume 24/Hr" },
    { value: `$${millify(totalMarketCap || 0)}`, unit: "Market Cap" },
    { value: millify(totalExchanges || 0), unit: "Total Exchanges" },
  ];

  return (
    <div className="!mt-[120px] flex gap-8 !mb-2">
      {stats.map((stat, index) => (
        <Stat
          key={index}
          value={stat.value}
          unit={stat.unit}
          isLoading={isLoading}
          isError={isError}
        />
      ))}
    </div>
  );
}
