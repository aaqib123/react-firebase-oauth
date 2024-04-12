import { ReactNode } from "react";

export interface User {
	name: string;
	email: string;
}

export interface GlobalState {
	user: User;
}

export interface Props {
	children: ReactNode;
}
