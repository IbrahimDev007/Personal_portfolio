import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Blog from "./Page/Blog/Blog";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		// errorElement: <ErrorPage />,
		children: [
			{
				element: <Blog />,
			},
		],
	},
]);
export default router;
