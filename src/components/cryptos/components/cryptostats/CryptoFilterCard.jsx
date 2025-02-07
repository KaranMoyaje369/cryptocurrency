import React, { useEffect, useState } from "react";
import useCryptomarkets from "../../hooks/useCryptoMarkets";
import useCryptoHistory from "../../hooks/useCryptoHistory";
import LineBarChart from "../graph/LineBarChart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MenuItem, Select } from "@mui/material";

// define the time Period according to the api details
let TimePeriods = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

const CryptoFilterCard = () => {
  let [selectTimePeriod, setSelectTimePeriod] = useState("1y");

  // fetching the coins from the api to display only few coins
  const { coins, isloading, isError } = useCryptomarkets();

  // filtering only few coins from the obtained data
  let filteredCoins = coins.filter((coin) =>
    ["BTC", "XRP", "USDT", "USDC", "LTC", "AAVE"].includes(coin.symbol)
  );

  // to keep the tabs active whenever user clicks on it
  const [activeTabKey, setActiveTabkey] = useState("");

  // getting the history of each coin selected by the user to generate the Graph
  let { history } = useCryptoHistory(activeTabKey, selectTimePeriod);

  // default select the coins as soon as browser is loaded
  useEffect(() => {
    if (coins.length > 0) {
      setActiveTabkey(coins[0].uuid); // selecting the first coin from the coin list
    }
  }, [coins]);

  // function for Handling the changes in Tabs
  const HandleTabChange = (key) => setActiveTabkey(key);
  const HandleTimePeriodChage = (e) => setSelectTimePeriod(e.target.value);

  // filtering the coin data based on selected tab
  const SelectedCoin = filteredCoins.find((coin) => coin.uuid === activeTabKey);

  return (
    <Card className="!rounded-none">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {isloading ? (
            <div>
              <span className="visually-hidden">Loading...</span>{" "}
            </div>
          ) : (
            <>
              <div className="flex flex-wrap justify-between items-center gap-4 !py-2 !px-4 sm:!px-8">
                {SelectedCoin ? (
                  <div className="flex items-center gap-4">
                    <img
                      src={SelectedCoin.iconUrl}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <span className="text-gray-500">{SelectedCoin.symbol}</span>
                  </div>
                ) : (
                  <h3 className="text-orange-500 font-bold">Select the coin</h3>
                )}

                {/* Responsive Dropdown */}
                <Select
                  value={selectTimePeriod}
                  onChange={HandleTimePeriodChage}
                  displayEmpty
                  sx={{
                    width: { xs: "100%", sm: "auto" }, // Full width on small screens, auto on larger screens
                    minWidth: "120px", // Ensures a minimum width
                    height: { xs: "40px", sm: "45px" }, // Responsive height
                    padding: "8px",
                    border: "1px solid #D1D5DB", // Gray border like Tailwind `border-gray-300`
                    borderRadius: "6px", // Rounded corners
                    backgroundColor: "white", // Background color
                  }}
                >
                  {TimePeriods.map((period) => (
                    <MenuItem value={period} key={period}>
                      {period}
                    </MenuItem>
                  ))}
                </Select>
              </div>

              {/* tabs for coins */}
              <div>
                <ul className="!mt-2 flex items-center justify-center flex-wrap gap-2 !p-2">
                  {filteredCoins.map((coin) => (
                    <li key={coin.uuid}>
                      <Button
                        className="!font-bold md:!text-lg"
                        variant={
                          activeTabKey === coin.uuid ? "contained" : "outlined "
                        }
                        sx={{
                          bgcolor:
                            activeTabKey === coin.uuid ? "#000" : "transparent",
                          color:
                            activeTabKey === coin.uuid ? "#fff" : "#f97316",
                          "&:hover": {
                            bgcolor:
                              activeTabKey === coin.uuid
                                ? "#f97316"
                                : "rgba(0, 0, 0, 0.1)",
                          },
                        }}
                        onClick={() => HandleTabChange(coin.uuid)}
                      >
                        {coin.symbol}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* graph content */}
              <div>
                <LineBarChart data={history} />
              </div>
            </>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CryptoFilterCard;
