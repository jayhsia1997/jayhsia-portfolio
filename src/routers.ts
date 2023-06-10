import Home from "./components/Home";
import About from "./components/About";

const routers: Array<object> = [
	{
		path: "/",
		Component: Home
	},
	{
		path: "/about",
		Component: About
	}
]

export default routers;
