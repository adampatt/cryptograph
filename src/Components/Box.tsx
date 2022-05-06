import * as React from "react";
import StockPrice from "./StockPrice";
import CurrencyList from "./CurrencyList";
import { CoinNameContext } from "../context/coinDataContext";

//Box is the container
interface AppContextInterface {
	coinName: String;
	setCoinName: any;
}

export const AppCtx =
	React.createContext<AppContextInterface | null>(
		null
	);

export const Box = () => {
	const [coinName, setCoinName] =
		React.useState<string>("bitcoin");

	const sampleAppContext: AppContextInterface = {
		coinName: coinName,
		setCoinName: setCoinName,
	};

	return (
		<div
			className="
			container 
			w-full
			border-solid
			border-2
			display
			flex
			flex-col
			md:flex-row xl 
			"
		>
			<AppCtx.Provider value={sampleAppContext}>
				<StockPrice />
				<CurrencyList />
			</AppCtx.Provider>
			<h1>{coinName}</h1>
		</div>
	);
};

/* <div className="w-1/3">
				<div className="flex justify-center">
					<h1 className="text-4xl">Select a coin</h1>
				</div>
				<div className="flex justify-center pt-4">
					<div className="bg-white rounded-lg  w-96 text-gray-900">
						{data.slice(0, 20).map((d) => (
							<button
								onClick={buttonHandler}
								name={d}
								key={d}
								type="button"
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
								{d}
							</button>
						))}
					</div>
				</div>
			</div>
			);
		</div>
	);
};

let data = [
	"Bitcoin",
	"Ethereum",
	"Tether",
	"BNB",
	"USD Coin",
	"XRP",
	"Solana",
	"Terra",
	"Cardano",
	"TerraUSD",
	"Binance USD",
	"Dogecoin",
	"Polkadot",
	"Avalanche",
	"Shiba Inu",
	"Lido Staked Ether",
	"Wrapped Bitcoin",
	"Dai",
	"NEAR Protocol",
	"Polygon",
	"Cronos",
	"TRON",
	"Bonded Luna",
	"Litecoin",
	"Bitcoin Cash",
	"Cosmos Hub",
	"LEO Token",
	"FTX Token",
	"Chainlink",
	"OKB",
	"Algorand",
	"Stellar",
	"ApeCoin",
	"Monero",
	"Ethereum Classic",
	"Uniswap",
	"VeChain",
	"Hedera",
	"Internet Computer",
	"Filecoin",
	"Elrond",
	"Magic Internet Money",
	"cETH",
	"Frax",
	"The Sandbox",
	"Theta Network",
	"Axie Infinity",
	"Decentraland",
	"Tezos",
	"DeFiChain",
	"PancakeSwap",
	"The Graph",
	"EOS",
	"Fantom",
	"STEPN",
	"Aave",
	"Klaytn",
	"THORChain",
	"Theta Fuel",
	"KuCoin Token",
	"Flow",
	"BitTorrent",
	"cUSDC",
	"Zcash",
	"Helium",
	"IOTA",
	"Huobi BTC",
	"Chain",
	"Frax Share",
	"Huobi Token",
	"Osmosis",
	"eCash",
	"Bitcoin SV",
	"Convex Finance",
	"TrueUSD",
	"cDAI",
	"Maker",
	"Quant",
	"NEO",
	"Waves",
	"Arweave",
	"NEXO",
	"Kusama",
	"Radix",
	"BitDAO",
	"Celo",
	"Synthetix Network Token",
	"Gala",
	"Enjin Coin",
	"Pax Dollar",
	"Zilliqa",
	"Stacks",
	"Harmony",
	"Chiliz",
	"GateToken",
	"Dash",
	"Neutrino USD",
	"Loopring",
	"Celsius Network",
	"Lido DAO",
]; */
