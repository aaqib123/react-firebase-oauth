import { useContext } from "react";
import { GlobalUserContext } from "../globalcontext/GlobalProvider";
import { fb_logOut } from "../firebase";

const Dashboard = () => {
	const { user } = useContext(GlobalUserContext);
	console.log("dashboard loaded");
	return (
		<>
			<h1>{user.name}</h1>
			<h2>{user.email}</h2>
			<br />
			<button onClick={fb_logOut}>Log out</button>
		</>
	);
};

export default Dashboard;
