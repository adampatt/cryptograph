import axios from "axios";

export const CoinGecko = axios.create({
	baseURL: "https://api.coingecko.com/api/v3",
	timeout: 1000,
});

export const Jsonplaceholder = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/",
	timeout: 1000,
});
