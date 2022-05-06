/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import { AppCtx } from "../Components/Box";
import { CoinGecko } from "../services/axios.services";
import { ICoinList } from "../@types/coinList";

const defaultCoinList: ICoinList[] = [];

const CurrencyList = () => {
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

	const appContext = React.useContext(AppCtx);

	const buttonHandler = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();

		const button: HTMLButtonElement =
			event.currentTarget;
		appContext?.setCoinName(button.name);
	};

	return (
		<div className="w-1/3">
			<div className="flex justify-center">
				<h1 className="text-4xl">Select a coin</h1>
			</div>
			<div className="flex justify-center pt-4">
				<div className="bg-white rounded-lg  w-96 text-gray-900">
					{newData.slice(0, 20).map((d) => (
						<button
							key={d[0]}
							type="button"
							name={d[0]}
							onClick={buttonHandler}
							className="
							text-center
							px-6
							py-2
							border-b border-gray-200
							w-full
							hover:bg-gray-100 hover:text-gray-500
							focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
							transition
							duration-500
							cursor-pointer
						"
						>
							{d[1]}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default CurrencyList;

// let data = [
// 	"Bitcoin",
// 	"Ethereum",
// 	"Tether",
// 	"BNB",
// 	"USD Coin",
// 	"XRP",
// 	"Solana",
// 	"Terra",
// 	"Cardano",
// 	"TerraUSD",
// 	"Binance USD",
// 	"Dogecoin",
// 	"Polkadot",
// 	"Avalanche",
// 	"Shiba Inu",
// 	"Lido Staked Ether",
// 	"Wrapped Bitcoin",
// 	"Dai",
// 	"NEAR Protocol",
// 	"Polygon",
// 	"Cronos",
// 	"TRON",
// 	"Bonded Luna",
// 	"Litecoin",
// 	"Bitcoin Cash",
// 	"Cosmos Hub",
// 	"LEO Token",
// 	"FTX Token",
// 	"Chainlink",
// 	"OKB",
// 	"Algorand",
// 	"Stellar",
// 	"ApeCoin",
// 	"Monero",
// 	"Ethereum Classic",
// 	"Uniswap",
// 	"VeChain",
// 	"Hedera",
// 	"Internet Computer",
// 	"Filecoin",
// 	"Elrond",
// 	"Magic Internet Money",
// 	"cETH",
// 	"Frax",
// 	"The Sandbox",
// 	"Theta Network",
// 	"Axie Infinity",
// 	"Decentraland",
// 	"Tezos",
// 	"DeFiChain",
// 	"PancakeSwap",
// 	"The Graph",
// 	"EOS",
// 	"Fantom",
// 	"STEPN",
// 	"Aave",
// 	"Klaytn",
// 	"THORChain",
// 	"Theta Fuel",
// 	"KuCoin Token",
// 	"Flow",
// 	"BitTorrent",
// 	"cUSDC",
// 	"Zcash",
// 	"Helium",
// 	"IOTA",
// 	"Huobi BTC",
// 	"Chain",
// 	"Frax Share",
// 	"Huobi Token",
// 	"Osmosis",
// 	"eCash",
// 	"Bitcoin SV",
// 	"Convex Finance",
// 	"TrueUSD",
// 	"cDAI",
// 	"Maker",
// 	"Quant",
// 	"NEO",
// 	"Waves",
// 	"Arweave",
// 	"NEXO",
// 	"Kusama",
// 	"Radix",
// 	"BitDAO",
// 	"Celo",
// 	"Synthetix Network Token",
// 	"Gala",
// 	"Enjin Coin",
// 	"Pax Dollar",
// 	"Zilliqa",
// 	"Stacks",
// 	"Harmony",
// 	"Chiliz",
// 	"GateToken",
// 	"Dash",
// 	"Neutrino USD",
// 	"Loopring",
// 	"Celsius Network",
// 	"Lido DAO",
// ];
