import React, { useState, memo } from "react";
import useCryptoMarkets from "../../hooks/useCryptoMarkets";
import useCryptoHistory from "../../hooks/useCryptoHistory";
import millify from "millify";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import LineChart from "../graph/LineChart";
import { Button } from "@mui/material";

const columns = [
  { id: "rank", label: "Rank", minWidth: 100, align: "center" },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 170, align: "right" },
  { id: "total24hv", label: "24h Volume", minWidth: 170, align: "right" },
  { id: "marketcap", label: "Market Cap", minWidth: 170, align: "right" },
  { id: "change", label: "Change", minWidth: 170, align: "right" },
  { id: "graph", label: "Graph", minWidth: 170, align: "right" },
];

// ✅ Memoized component to prevent unnecessary renders
const HistoricalData = memo(({ uuid, change }) => {
  // console.log("Fetching history for:", uuid);
  const { history, isLoading, isError } = useCryptoHistory(uuid);

  return <LineChart data={history} change={change} />;
});

const CryptoTable = () => {
  let { coins = [], isLoading, isError } = useCryptoMarkets();
  // console.log("Inside Components Coins:", coins);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", minWidth: "300px" }}>
      <TableContainer
        sx={{
          maxHeight: 440,
          overflow: "auto",
          "&::-webkit-scrollbar": { display: "none" }, // ✅ Hide scrollbar in WebKit browsers
          msOverflowStyle: "none", // ✅ Hide scrollbar in IE/Edge
          scrollbarWidth: "none", // ✅ Hide scrollbar in Firefox
        }}
      >
        <Table stickyHeader aria-label="crypto table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    borderRight: 2,
                    borderColor: "rgba(106, 114, 130, 0.1)",
                  }}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* ✅ Loading state */}
            {isLoading && (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            )}

            {/* ✅ Error state */}
            {isError && (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  Error fetching data.
                </TableCell>
              </TableRow>
            )}

            {/* ✅ Render table data only if there is no error */}
            {!isLoading &&
              !isError &&
              coins
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((coin) => (
                  <TableRow key={coin.uuid} hover role="checkbox" tabIndex={-1}>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: 2,
                        borderColor: "rgba(106, 114, 130, 0.1)",
                      }}
                    >
                      {coin.rank}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: 2,
                        borderColor: "rgba(106, 114, 130, 0.1)",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={coin.iconUrl}
                          alt={coin.name}
                          width="30"
                          height="30"
                          className="!min-w-[30px]"
                        />
                        <p>{coin.name}</p>
                        <p className="!text-gray-500">{coin.symbol}</p>
                      </div>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        borderRight: 2,
                        borderColor: "rgba(106, 114, 130, 0.1)",
                      }}
                    >
                      ${millify(coin.price, { precision: 2 })}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        borderRight: 2,
                        borderColor: "rgba(106, 114, 130, 0.1)",
                      }}
                    >
                      ${millify(coin["24hVolume"])}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        borderRight: 2,
                        borderColor: "rgba(106, 114, 130, 0.1)",
                      }}
                    >
                      ${millify(coin.marketCap, { precision: 2 })}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        borderRight: 2,
                        borderColor: "rgba(106, 114, 130, 0.1)",
                        color: coin.change > 0 ? "green" : "red",
                      }}
                    >
                      {coin.change}%
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: 2,
                        borderColor: "rgba(106, 114, 130, 0.1)",
                        color: coin.change > 0 ? "green" : "red",
                      }}
                    >
                      <HistoricalData uuid={coin.uuid} change={coin.change} />
                      <Button>
                        <a href={coin.coinrankingUrl}>View Chart</a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ✅ Pagination */}
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={coins.length || 0} // Ensure no error if coins is undefined
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CryptoTable;
