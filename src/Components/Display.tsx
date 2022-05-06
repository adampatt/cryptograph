import * as React from "react";
import { CoinGecko } from "../services/axios.services";
import { ICoinList } from "../@types/coinList";

const defaultCoinList: ICoinList[] = [];

interface MappedData {
	id: string;
	name: string;
}

function Display() {
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

	let newData = data.map((d) => {
		return [d.id, d.name];
	});

	return (
		<div className="App">
			<>
				<h1>{JSON.stringify(newData)}</h1>
				<p>{JSON.stringify(data)}</p>
				<h1 className="text-4xl">
					CryptoCurrency coin history
				</h1>
			</>
		</div>
	);
}

export default Display;
