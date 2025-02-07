import { configureStore } from "@reduxjs/toolkit";
import { CryptoMarketsApi } from "../components/cryptos/services/CryptoMarkets";
import { NewsApi } from "../components/news/services/NewsServices";

export const store = configureStore({
  reducer: {
    [CryptoMarketsApi.reducerPath]: CryptoMarketsApi.reducer,
    [NewsApi.reducerPath]: NewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      CryptoMarketsApi.middleware,
      NewsApi.middleware
    ),
});
