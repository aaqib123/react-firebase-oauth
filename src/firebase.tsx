import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyByiaYi_chR1bFrFl2u00jKepehr8PTgeM",
	authDomain: "react-oauth-test-74507.firebaseapp.com",
	projectId: "react-oauth-test-74507",
	storageBucket: "react-oauth-test-74507.appspot.com",
	messagingSenderId: "470913784261",
	appId: "1:470913784261:web:049d5b9be857224c4393ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const fb_signInWithGoogle = () => {
	// Sign in with Google
	return signInWithPopup(auth, provider);
};

export const fb_logOut = () => {
	return auth.signOut();
};

// .then((result) => {
// 	// This gives you a Google Access Token. You can use it to access the Google API.
// 	// const credential = GoogleAuthProvider.credentialFromResult(result);
// 	// const token = credential?.accessToken;

// 	// The signed-in user info.
// 	return result.user;
// })
// .catch((error) => {
// 	console.log("error", error);
// });
