import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalUserContext } from "../../globalcontext/GlobalProvider";

const Protected = () => {
	const { user } = useContext(GlobalUserContext);

	console.log("user: ", user.email);
	return user.email ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
