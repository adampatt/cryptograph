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
import { AppCtx } from "../context/coinDataContext";

const defaultPosts: IStock[] = [];

function Graph() {
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

	const appContext = React.useContext(AppCtx);
	const coinValue =
		appContext?.coinName.toLocaleLowerCase();

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
							? "A timeout has occurred please refresh the page"
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
	}, [coinValue]);

	const newD = priceAndDateData(posts);

	while (loading) {
		return <h1>Loading</h1>;
	}
	while (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div className="w-2/3 xl:w-full flex-col max-h-screen relative">
			<div className="w-full  flex justify-center pb-2 h-2/8">
				<h1 className="text-4xl">
					{appContext?.coinName}
				</h1>
			</div>
			<div className="w-full flex justify-center ">
				<ResponsiveContainer
					width="80%"
					height="80%"
					aspect={1}
				>
					<LineChart
						data={newD}
						margin={{
							top: 30,
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
								fontSize: "16",
							}}
						/>
						<YAxis
							label={{
								value: "Price in USD",
								angle: -90,
								position: "insideLeft",
								offset: -20,
								fontSize: "16",
							}}
							type="number"
							domain={[
								0,
								(dataMax: number) =>
									Math.ceil(dataMax * 1.3),
							]}
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
	);
}

export default Graph;
