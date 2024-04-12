import { createContext, useEffect, useReducer } from "react";
import { GlobalState, Props, User } from "./GlobalInterfaces";
import GlobalReducer from "./GlobalReducer";
import { ActionType } from "./Actions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const initialState: GlobalState = {
	user: {
		name: "",
		email: "",
	},
};

interface ActionsModel {
	setUser: (user: User) => void;
	clearUser: () => void;
}

const actionContext: ActionsModel = {
	setUser: () => {},
	clearUser: () => {},
};

export const GlobalUserContext = createContext(initialState);
export const GlobalDispatchContext = createContext(actionContext);

const GlobalProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(GlobalReducer, initialState);

	const setUser = (user: User) => {
		dispatch({
			type: ActionType.SET_USER,
			payload: user,
		});
	};

	const clearUser = () => {
		dispatch({
			type: ActionType.CLEAR_USER,
		});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			console.log("onAuthStateChanged: ", user);
			if (!user) {
				clearUser();
			} else {
				setUser({
					name: user.displayName ?? "",
					email: user.email ?? "",
				});
				// redirect to dashboard
			}
		});
	}, []);

	return (
		<GlobalUserContext.Provider value={state}>
			{children}
		</GlobalUserContext.Provider>
	);
};

export default GlobalProvider;
