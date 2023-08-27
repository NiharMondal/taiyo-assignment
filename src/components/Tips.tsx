export default function Tips({
	first,
	second,
}: {
	first?: string;
	second: string;
}) {
	return (
		<p
			className={`${
				!first ? "text-red-500" : ""
			} p-4 bg-teal-100 shadow mb-3 rounded italic`}
		>
			<span className="font-semibold">{first ? first + ":" : ""} </span>
			{second}
		</p>
	);
}
