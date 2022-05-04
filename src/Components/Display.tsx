import * as React from "react";
import axios from "axios";
import { CoinGecko } from "../services/axios.services";
import { coinListName } from "../helpers";
import { ICoinList } from "../@types/coinList";

const defaultCoinList: ICoinList[] = [];

function Display() {
	const [coinName, setCoinName] =
		React.useState("bitcoin");
	const [data, setData]: [
		ICoinList[],
		(data: ICoinList[]) => void
	] = React.useState(defaultCoinList);
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
			"/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
		)
			.then(function (response) {
				setData(response.data);
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

	// let newData = coinListName(data);
	//TODO error here when passing values into context
	//TODO holds both current coinName, currency, days, interval, passed data and setState down into list component and stockPrice component gets only values.
	//TODO context can just pass down state values and setState functions

	return (
		<div className="App">
			<>
				{/* <h1>DisplayContainer</h1>
				<h1>{JSON.stringify(data)}</h1>
				<h1 className="text-4xl font-bold underline">
					{coinName}
				</h1> */}
				{/* {Object.values(newData).map((a) => (
					<>
						<h1 onClick={() => setCoinName(a)}>{a}</h1>
					</>
				))} */}
			</>
		</div>
	);
}

export default Display;
