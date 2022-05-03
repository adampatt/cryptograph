import * as React from "react";
import axios from "axios";
import { coinListName } from "../helpers";
import { ICoinList } from "../@types/coinList";
import { InnerBox } from "./InnerBox";

const defaultCoinList: ICoinList[] = [];

function Display() {
	const [coinName, setCoinName] =
		React.useState("bitcoin");
	const [data, setData]: [
		ICoinList[],
		(data: ICoinList[]) => void
	] = React.useState(defaultCoinList);

	React.useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
			)
			.then(function (response) {
				setData(response.data);
			});
	}, []);

	interface ItestData {
		data?: string[] | undefined;
	}

	let newData = coinListName(data);
	console.log(newData);
	// let testData: ItestData = {
	// 	data: [
	// 		"Bitcoin",
	// 		"Ethereum",
	// 		"Tether",
	// 		"BNB",
	// 		"USD Coin",
	// 		"XRP",
	// 		"Solana",
	// 		"Terra",
	// 		"Cardano",
	// 		"TerraUSD",
	// 		"Binance USD",
	// 		"Dogecoin",
	// 		"Polkadot",
	// 		"Avalanche",
	// 		"Shiba Inu",
	// 		"Lido Staked Ether",
	// 		"Wrapped Bitcoin",
	// 		"Dai",
	// 		"NEAR Protocol",
	// 		"Polygon",
	// 		"Cronos",
	// 		"TRON",
	// 		"Bonded Luna",
	// 		"Litecoin",
	// 		"Bitcoin Cash",
	// 		"Cosmos Hub",
	// 		"LEO Token",
	// 		"FTX Token",
	// 		"Chainlink",
	// 		"OKB",
	// 		"Algorand",
	// 		"Stellar",
	// 		"ApeCoin",
	// 		"Monero",
	// 		"Ethereum Classic",
	// 		"Uniswap",
	// 		"VeChain",
	// 		"Hedera",
	// 		"Internet Computer",
	// 		"Filecoin",
	// 		"Elrond",
	// 		"Magic Internet Money",
	// 		"cETH",
	// 		"Frax",
	// 		"The Sandbox",
	// 		"Theta Network",
	// 		"Axie Infinity",
	// 		"Decentraland",
	// 		"Tezos",
	// 		"DeFiChain",
	// 		"PancakeSwap",
	// 		"The Graph",
	// 		"EOS",
	// 		"Fantom",
	// 		"STEPN",
	// 		"Aave",
	// 		"Klaytn",
	// 		"THORChain",
	// 		"Theta Fuel",
	// 		"KuCoin Token",
	// 		"Flow",
	// 		"BitTorrent",
	// 		"cUSDC",
	// 		"Zcash",
	// 		"Helium",
	// 		"IOTA",
	// 		"Huobi BTC",
	// 		"Chain",
	// 		"Frax Share",
	// 		"Huobi Token",
	// 		"Osmosis",
	// 		"eCash",
	// 		"Bitcoin SV",
	// 		"Convex Finance",
	// 		"TrueUSD",
	// 		"cDAI",
	// 		"Maker",
	// 		"Quant",
	// 		"NEO",
	// 		"Waves",
	// 		"Arweave",
	// 		"NEXO",
	// 		"Kusama",
	// 		"Radix",
	// 		"BitDAO",
	// 		"Celo",
	// 		"Synthetix Network Token",
	// 		"Gala",
	// 		"Enjin Coin",
	// 		"Pax Dollar",
	// 		"Zilliqa",
	// 		"Stacks",
	// 		"Harmony",
	// 		"Chiliz",
	// 		"GateToken",
	// 		"Dash",
	// 		"Neutrino USD",
	// 		"Loopring",
	// 		"Celsius Network",
	// 		"Lido DAO",
	// 	],
	// };

	return (
		<div className="App">
			<>
				<h1>DisplayContainer</h1>
				<h1>{JSON.stringify(newData)}</h1>
				<h1>{coinName}</h1>
				{Object.values(newData).map((a) => (
					<>
						<h1 onClick={() => setCoinName(a)}>{a}</h1>
					</>
				))}
			</>
		</div>
	);
}

export default Display;
