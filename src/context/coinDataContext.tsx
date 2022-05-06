import * as React from "react";
import { IAppContextInterface } from "../@types/appC";

export const AppCtx =
	React.createContext<IAppContextInterface | null>(
		null
	);
