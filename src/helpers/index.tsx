import { IStock } from "../@types/stocklist";
import { ICoinList } from "../@types/coinList";

export const priceAndDateData = (
	posts: IStock[]
) => {
	for (let ar in posts) {
		let ds: IStock[] = [];
		if (ar === "prices") {
			ds = [posts[ar]];
		}
		return dataTransform(ds);
	}
};

export const dataTransform = (ds: any) => {
	let final = [];
	for (let i = 0; i < ds[0].length; i++) {
		final[i] = {
			day: new Date(ds[0][i][0])
				.toLocaleString()
				.slice(0, 8),
			price: Math.trunc(ds[0][i][1]),
		};
	}
	return final;
};

// export const coinListName = (
// 	data: ICoinList[]
// ) => {
// 	let result = [];
// 	for (let val of Object.values(data)) {
// 		let coinName = val.name;
// 		result.push(coinName);
// 	}
// 	return result;
// };

export const coinListName: (
	data: Array<number>[]
) => Array<number>[] = function (
	data: Array<number>[]
): Array<number>[] {
	let result = [];
	for (let val of Object.values(data)) {
		result.push(val);
	}
	return result;
};
