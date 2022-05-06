import { IStock } from "../@types/stocklist";

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
			price: ds[0][i][1].toFixed(2),
		};
	}
	return final;
};
