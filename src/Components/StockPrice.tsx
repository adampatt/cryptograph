import React from "react";
import { CoinMarketCapAPI } from "../services/coinmarketcap.services";
import { IStock } from "../@types/stocklist";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from "recharts";
import { priceAndDateData } from "../helpers/index";

const coinValue = "bitcoin";
const defaultPosts: IStock[] = [];

function StockPrice() {
	const [posts, setPosts]: [
		IStock[],
		(posts: IStock[]) => void
	] = React.useState(defaultPosts);
	const [loading, setLoading]: [
		boolean,
		(loading: boolean) => void
	] = React.useState<boolean>(true);
	const [error, setError]: [
		string,
		(error: string) => void
	] = React.useState("");

	React.useEffect(() => {
		const abortController = new AbortController();
		CoinMarketCapAPI.get(
			`coins/${coinValue}/market_chart?vs_currency=usd&days=30&interval=daily`
		)
			.then((response: { data: IStock[] }) => {
				setPosts(response.data);
				setLoading(false);
			})
			.catch(
				(ex: {
					code: string;
					response: { status: number };
				}) => {
					const error =
						ex.code === "ECONNABORTED"
							? "A timeout has occurred"
							: ex.response.status === 404
							? "Resource Not found"
							: "An unexpected error has occurred";
					setError(error);
					setLoading(false);
				}
			);
		return () => {
			abortController.abort();
		};
	}, []);

	const newD = priceAndDateData(posts);

	{
		loading && <h1>Loading</h1>;
	}
	{
		error && <h1>{error}</h1>;
	}

	return (
		<div className="App">
			<div
				style={{
					width: "500px",
					height: "500px",
					border: "1px, solid, black",
					margin: "40px, 20px, 10px, 300px	",
				}}
			>
				<LineChart
					width={400}
					height={400}
					data={newD}
				>
					<XAxis dataKey="day" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="price"
						stroke="#8884d8"
					/>
				</LineChart>
			</div>
		</div>
	);
}

export default StockPrice;
