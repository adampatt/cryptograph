import axios from "axios";

export const Jsonplaceholder = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/",
	timeout: 1000,
});
