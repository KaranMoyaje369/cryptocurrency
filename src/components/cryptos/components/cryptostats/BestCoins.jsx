import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LineChart from "../graph/LineChart";
import useCryptoHistory from "../../hooks/useCryptoHistory";
import { Button } from "@mui/material";

const BestCoins = ({ bestCoins, isLoading, isError }) => {
  // console.log("bestCoin:", bestCoins);

  const HistoricalData = ({ uuid }) => {
    // console.log("Fetching history for BestCoin:", uuid);
    const { history, isLoading, isError } = useCryptoHistory(uuid);

    return <LineChart data={history} />;
  };

  return (
    <>
      <Paper sx={{}}>
        <TableContainer
          sx={{
            maxHeight: 440,
            overflow: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <Table stickyHeader aria-label="crypto table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} className="!text-xl">
                  Trending Coins
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {/* ✅ Loading state */}
              {isLoading && (
                <TableRow>
                  <TableCell align="center">Loading...</TableCell>
                </TableRow>
              )}

              {/* ✅ Error state */}
              {isError && (
                <TableRow>
                  <TableCell align="center">Error fetching data.</TableCell>
                </TableRow>
              )}

              {/* ✅ Render table data only if there is no error */}
              {!isLoading &&
                !isError &&
                bestCoins.map((coin, index) => {
                  return (
                    <TableRow
                      key={coin.uuid}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                    >
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center flex-wrap gap-4">
                          <img
                            src={coin.iconUrl}
                            alt={coin.name}
                            width="30"
                            height="30"
                            className="!min-w-[30px] !max-h-[30px]"
                          />
                          <p>{coin.name}</p>
                          <p className="!text-gray-500">{coin.symbol}</p>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <HistoricalData uuid={coin.uuid} />
                        <Button>
                          <a href={coin.coinrankingUrl}>View Chart</a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default BestCoins;
