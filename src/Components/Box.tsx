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
		</div>
	);
};
