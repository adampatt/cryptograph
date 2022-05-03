import React from "react";

const data = [
	"bitcoin",
	"etherum",
	"tether",
	"bnb",
	"usdc",
	"xrp",
	"sol",
	"luna",
	"ada",
	"ust",
];
const CurrencyList = () => {
	return (
		<div>
			<p>Inner Box</p>
			<ul>
				{data.map((d) => (
					<li>{d}</li>
				))}
			</ul>
		</div>
	);
};

export default CurrencyList;
