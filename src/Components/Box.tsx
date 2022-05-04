import * as React from "react";
import StockPrice from "./StockPrice";
import CurrencyList from "./CurrencyList";

export const Box = () => {
	return (
		<div
			className="
			container mx-auto
			border-solid
			border-2
			border-indigo-600
			display
			flex
			flex-row
			"
		>
			<StockPrice />
			<CurrencyList />
		</div>
	);
};
