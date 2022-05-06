import { createContext, useContext } from "react";
export type BoxContainerContext = {
	coinName: string;
	setName: (c: string) => void;
};
export const CoinNameContext =
	createContext<BoxContainerContext>({
		coinName: "bitcoin",
		setName: () => {},
	});
export const useGlobalContext = () =>
	useContext(CoinNameContext);
