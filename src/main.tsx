import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

//import router component
import { router } from "./routes";
import "leaflet/dist/leaflet.css"
//redux setup
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { QueryClient, QueryClientProvider } from "react-query";

//make new query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* we are wrapping whole component with react query */}
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>
);
