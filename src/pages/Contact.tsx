import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export default function Contact() {
	const { id } = useParams();
	const navigation =useNavigate()

	const user = useAppSelector((state) =>
		state.contacts.data.find(
			(contact) => contact.id === id!
		)
	);
	return (
		<section>
			<Header title="Contact Page" />

			<div className="flex  justify-center pt-20">
				<div className="shadow-lg p-8 text-4xl relative">
					<div className="absolute right-4 top-1 hover:bg-red-600 cursor-pointer p-2 rounded w-12 text-center hover:text-white duration-150" onClick={()=>navigation('/contacts')}>X</div>

					<div className="mt-8">
						<h4>
							<span>Fullname: </span>
							{user?.firstName} {user?.lastName}
						</h4>
						<p>Status: {user?.status}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
