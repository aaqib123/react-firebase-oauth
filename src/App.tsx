import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import About from "./pages/about";
import GlobalProvider from "./globalcontext/GlobalProvider";
import Protected from "./components/protected/protected";

function App() {
	const Layout = () => {
		return (
			<GlobalProvider>
				<Navbar />
				<section className="container">
					<Outlet />
				</section>
				<Footer />
			</GlobalProvider>
		);
	};

	const routes = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					element: <Protected />,
					children: [
						{
							path: "/dashboard",
							element: <Dashboard />,
						},
					],
				},
				{
					path: "*",
					element: <div>404 Not Found</div>,
				},
			],
		},
	]);

	return <RouterProvider router={routes} />;
}

export default App;
