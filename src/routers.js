import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

const routers = [
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "/about",
        Component: About
      }
    ],
    errorElement: <NotFound />
  }
]

export default routers;
