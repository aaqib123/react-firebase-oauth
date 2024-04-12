import { useContext } from "react";
import { fb_logOut, fb_signInWithGoogle } from "../firebase";
import { GlobalUserContext } from "../globalcontext/GlobalProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const { user } = useContext(GlobalUserContext);
	const navigate = useNavigate();

	const onSignin = () => {
		fb_signInWithGoogle()
			.then((userCredential) => {
				userCredential.user ? navigate("/dashboard") : console.log("no user");
			})
			.catch((error) => {
				console.log("error", error);
			});
	};
	return (
		<div>
			<div>home</div>
			{user.email ? (
				<button onClick={fb_logOut}>Log out</button>
			) : (
				<button onClick={onSignin}>Sign in</button>
			)}
		</div>
	);
};

export default Home;
