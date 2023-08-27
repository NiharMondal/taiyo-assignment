import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import RootLayout from "./RootLayout";
import Chart from "./pages/Chart";
import CreateContact from "./pages/CreateContact";
import Contact from "./pages/Contact";
import EditContact from "./pages/EditContact";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <Navigate to="/contacts" /> },
			{
				path: "/contacts",
				element: <App />,
				index: true,
			},
			{
				path: "create-contact",
				element: <CreateContact />,
			},
			{
				path: "contacts/edit-contact/:id",
				element: <EditContact />,
			},
			{ path: "contacts/:id", element: <Contact /> },

			{ path: "chart", element: <Chart /> },
		],
	},
]);
