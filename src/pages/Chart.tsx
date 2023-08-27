import React from "react";
import Header from "../components/Header";
import LineGraph from "../components/LineGraph";
import MapBox from "../components/MapBox";

export default function Chart() {
	return (
		<section>
			<Header title="Chart and Map " />
			<React.Fragment>
				<MapBox />
				<LineGraph />
			</React.Fragment>
		</section>
	);
}
