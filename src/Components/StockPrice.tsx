import React from "react";
import { CoinGecko } from "../services/axios.services";
import { IStock } from "../@types/stocklist";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
	ResponsiveContainer,
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
		CoinGecko.get(
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

	//TODO Add types for graph
	return (
		<div className="App">
			<div
				className="
				w-full
				border-solid
				border-2
				border-indigo-600
				flex
				justify-left
				"
			>
				<div className="w-2/3 border-solid border-2 border-yellow-600 flex-col ">
					<div className="w-full border-solid border-2 border-red-600 flex justify-center pb-2">
						<h1> Header </h1>
					</div>
					<div className="w-full border-solid border-2 border-red-600 flex justify-center py-24">
						<ResponsiveContainer
							width={700}
							height={800}
						>
							<LineChart
								data={newD}
								margin={{
									top: 15,
									right: 30,
									left: 30,
									bottom: 30,
								}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis
									dataKey="day"
									label={{
										value:
											"Date displayed in DD/MM/YY format",
										position: "insideBottom",
										offset: -50,
									}}
								/>
								<YAxis
									label={{
										value: "Price in USD",
										angle: -90,
										position: "insideLeft",
										offset: -20,
									}}
								/>
								<Tooltip />
								<Legend />
								<Line
									type="monotone"
									name="$"
									dataKey="price"
									stroke="#8884d8"
									activeDot={{ r: 8 }}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StockPrice;
