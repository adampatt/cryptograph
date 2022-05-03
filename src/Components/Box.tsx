import * as React from "react";
import StockPrice from "./StockPrice";
import CurrencyList from "./CurrencyList";

export const Box = () => {
	return (
		<div>
			<StockPrice />
			<CurrencyList />
		</div>
	);
};
