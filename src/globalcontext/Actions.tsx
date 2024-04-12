import { User } from "./GlobalInterfaces";

export enum ActionType {
	SET_USER = "SET_USER",
	CLEAR_USER = "CLEAR_USER",
}

export type Action =
	| { type: ActionType.SET_USER; payload: User }
	| { type: ActionType.CLEAR_USER };
