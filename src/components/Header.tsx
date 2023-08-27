type Props = {
   title: string
}

export default function Header({title}: Props) {
  return (
		<header className="p-5 bg-teal-400 text-white">
			<h1 className="text-3xl">{title}</h1>
		</header>
  );
}
