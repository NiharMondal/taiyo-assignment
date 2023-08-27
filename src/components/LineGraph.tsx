import {
	LineChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Line,
} from "recharts";
import Tips from "./Tips";
import { useQuery } from "react-query";
import { LineGrap } from "../assets/types";

export default function LineGraph() {
	const {
		isLoading,
		error,
		data: graphData,
	} = useQuery(
		"cases-fluctuations",
		(): Promise<LineGrap> =>
			fetch("https://disease.sh/v3/covid-19/all").then((res) => res.json())
	);
	if (isLoading)
		return <p className="text-lg text-center font-bold">Loading charts....</p>;
	if (error) return <p>Something went wrong!</p>;
	
	
	const data = [
		{
			name: "cases",
			data: graphData?.cases,
		},
		{
			name: "recovered",
			data: graphData?.recovered,
		},

		{
			name: "tests",
			data: graphData?.tests,
		},
		{
			name: "active",
			data: graphData?.active,
		},
		{
			name: "population",
			data: graphData?.population,
		},
	];
	return (
		<section className="p-5">
			<Tips second="Line Graph Chart. May be this line chart is not same that was required. I did not understant that form which API I have to make a line chart. Sorry😒" />

			<ResponsiveContainer width="95%" height={500}>
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						left: 40,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="data"
						stroke="#8884d8"
						activeDot={{ r: 8 }}
					/>
					
				</LineChart>
			</ResponsiveContainer>
		</section>
	);
}
