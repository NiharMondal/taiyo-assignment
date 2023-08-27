import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useQuery } from "react-query";
import { Counrty } from "../assets/types";
import Tips from "./Tips";
import { Icon } from "leaflet";



const customIcon = new Icon({
	iconUrl: "https://img.icons8.com/?size=512&id=44023&format=png",
	iconSize: [35, 35],
});
export default function MapBox() {
	const { isLoading, error, data } = useQuery(
		"all-country-info",
		(): Promise<Counrty[]> =>
			fetch("https://disease.sh/v3/covid-19/countries").then((res) =>
				res.json()
			)
	);
	if (isLoading)
		return <p className="text-lg text-center font-bold">Loading map....</p>;
	if (error) return <p>Something went wrong!</p>;
	return (
		<div className="p-5 min-h[550px]">
			<Tips
				first="Note"
				second="Click on marker point to
			see the details 👇"
			/>
			<MapContainer
				center={[24.3630902, 89.7678696]}
				zoom={7}
				scrollWheelZoom={false}
				className="min-h-[550px] w-full p-5"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{data &&
					data.map((c) => (
						<Marker
							position={[c.countryInfo.lat, c.countryInfo.long]}
							key={c.country}
							icon={customIcon}
						>
							<Popup>
								<div className="leading-none">
									<h6 className="text-center font-semibold">
										{c.country}
									</h6>
									<p>Active: {c.active}</p>
									<p>Recoverd: {c.recovered}</p>
									<p>Deaths: {c.deaths}</p>
								</div>
							</Popup>
						</Marker>
					))}
			</MapContainer>
		</div>
	);
}
