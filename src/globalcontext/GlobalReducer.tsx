import { Action, ActionType } from "./Actions";
import { GlobalState } from "./GlobalInterfaces";

export default function GlobalReducer(state: GlobalState, action: Action) {
	switch (action.type) {
		case ActionType.SET_USER:
			return {
				...state,
				user: {
					name: action.payload.name,
					email: action.payload.email,
				},
			};
		case ActionType.CLEAR_USER:
			return {
				...state,
				user: {
					name: "",
					email: "",
				},
			};
		default:
			return state;
	}
}
