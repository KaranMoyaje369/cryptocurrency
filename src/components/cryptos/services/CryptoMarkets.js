import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
// console.log(API_KEY);
// crypto headers
let cryptoHeaders = {
  "x-rapidapi-key": API_KEY, // securing API Key
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

// base url
let baseUrl = "https://coinranking1.p.rapidapi.com";

// combining the baseUrl and header for request to server
const createRequest = (url) => ({
  url,
  headers: cryptoHeaders,
});

// Define a service using a base URL and expected endpoints
export const CryptoMarketsApi = createApi({
  reducerPath: "CryptoMarketsApi",
  baseQuery: fetchBaseQuery({ baseUrl }), // baseUrl make API Request
  endpoints: (builder) => ({
    getCryptoMarkets: builder.query({ query: () => createRequest("/coins") }), // fetch all the coins from api

    getCryptoStats: builder.query({ query: () => createRequest("/stats") }), // fetch total coins stats like marketcap totalcoins totalcapital etc.

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coins/${coinId}`), //fetches all of a  single coin details required.
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history?&timePeriod=${timePeriod}`), // fetches the history of perticular coin with the given timePeriod.
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCryptoMarketsQuery,
  useGetCryptoStatsQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = CryptoMarketsApi;
