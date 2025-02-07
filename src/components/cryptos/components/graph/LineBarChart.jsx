import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  Tooltip,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { CircularProgress, Box, Typography } from "@mui/material";

const LineBarChart = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [CoinHistory, setCoinHistory] = useState([]);

  useEffect(() => {
    if (data?.length) {
      const formattedData = data
        .map((point) => ({
          date: new Date(point.timestamp * 1000).toLocaleString(),
          price: parseFloat(point?.price),
        }))
        .slice(0, 50);

      setCoinHistory(formattedData);
      setLoading(false); // ✅ Stop loading when data is ready
    }
  }, [data]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      {loading ? (
        // ✅ Loading State with Spinner
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          flexDirection="column"
        >
          <CircularProgress size={50} />
          <Typography variant="body1" color="gray" mt={2}>
            Loading Chart...
          </Typography>
        </Box>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={CoinHistory}
            margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
          >
            <Tooltip />
            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={50} fill="#413ea0" />
            <Line type="monotone" dataKey="price" stroke="#ff7300" />
            <Scatter dataKey="price" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default LineBarChart;
