import * as React from "react";
import StockPrice from "./StockPrice";
import CurrencyList from "./CurrencyList";

export const Box = () => {
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
			<StockPrice />
			<CurrencyList />
		</div>
	);
};
