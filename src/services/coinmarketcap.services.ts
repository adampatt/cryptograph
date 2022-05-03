import axios from "axios";

export const CoinMarketCapAPI = axios.create({
	baseURL: "https://api.coingecko.com/api/v3",
	timeout: 1000,
});
