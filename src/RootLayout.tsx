import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function RootLayout() {
	return (
		<main className=" min-h-screen flex flex-col md:flex-row ">
			<aside className="bg-gray-200 p-5 md:w-[200px] shrink-0">
				<Sidebar />
			</aside>
			<section className="flex-1">
				<Outlet />
			</section>
		</main>
	);
}
