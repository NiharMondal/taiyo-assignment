import Header from "./components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { deleteContact } from "./redux/slice/contactSlice";

export default function App() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const contactLists = useAppSelector(state=>state.contacts.data)
	
	return (
		<section >
			<Header title="Contact Page" />
			<div className="p-5">
				<div>
					<button className="border border-gray-400 px-5 py-2 capitalize rounded hover:bg-teal-400 hover:text-white hover:border-teal-300">
						<Link to="/create-contact">create contact</Link>
					</button>
				</div>

				{contactLists.length > 0 ? (
					<table className="w-full mt-5 md:text-xl">
						<thead className="border border-gray-500">
							<tr>
								<th>Firstname</th>
								<th>Lastname</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						{contactLists.map((contact, index) => (
							<tbody key={index}>
								<tr className="text-center border-b border-gray-400 ">
									<td>{contact.firstName}</td>
									<td>{contact.lastName}</td>
									<td className={`${contact.status ==="Active"? "text-green-600": "text-amber-600"}`}>{contact.status}</td>
									<td className="space-x-4 font-semibold">
										<span
											className="hover:text-green-400 cursor-pointer"
											onClick={() =>
												navigate(
													`/contacts/edit-contact/${contact.id}`
												)
											}
										>
											Edit
										</span>
										<span
											onClick={() =>
												dispatch(deleteContact(contact.id!))
											}
											className="hover:text-red-400 cursor-pointer"
										>
											Delete
										</span>
										<span
											onClick={() =>
												navigate(`/contacts/${contact.id}`)
											}
											className="hover:text-sky-500 cursor-pointer"
										>
											View
										</span>
									</td>
								</tr>
							</tbody>
						))}
					</table>
				) : (
					<div className=" flex justify-center w-full">
						<div className="text-center mt-8 shadow-lg p-5 text-3xl">
							<p>No Contacts found!</p>
							<p>Please create new Contact</p>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
