import { Link } from "react-router-dom";
const LINK = [
	{ name: "Contacts", href: "/contacts" },
	{ name: "Charts and maps", href: "/chart" },
];

export default function Sidebar() {
	return (
		<nav>
			<ul className="font-semibold  flex flex-row justify-between md:flex-col gap-y-4">
				{LINK.map((item) => (
					<li className="hover:scale-105 hover:font-bold duration-100 ease-in-out" key={item.name}>
						<Link to={item.href}>{item.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
