import * as React from "react";
import Graph from "./Graph";
import CurrencyList from "./CurrencyList";
import { AppCtx } from "../context/coinDataContext";
import { IAppContextInterface } from "../@types/appC";

export const Box = () => {
	const [coinName, setCoinName] =
		React.useState<string>("bitcoin");

	const coinNameState: IAppContextInterface = {
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
			<AppCtx.Provider value={coinNameState}>
				<Graph />
				<CurrencyList />
			</AppCtx.Provider>
		</div>
	);
};
