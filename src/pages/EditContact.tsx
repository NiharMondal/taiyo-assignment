import { useState } from "react";
import Header from "../components/Header";
import { IContact, updateContact } from "../redux/slice/contactSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateContact() {
	const { id } = useParams();

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) =>
		state.contacts.data.find((contact) => contact.id === id!)
	);
	const [info, setInfo] = useState<IContact>(user!);

	//handle change function
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};

	//contact form update
	const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(updateContact(info));
		navigate("/contacts");
	};

	return (
		<section >
			<Header title="Contact Page" />
			<div className="flex items-center justify-center h-[600px]">
				<form
					className="p-5 bg-gray-300 space-y-4 w-[500px]"
					onSubmit={handleUpdate}
				>
					<h3 className="text-2xl">Update Form</h3>

					<div className="space-x-2 flex ">
						<input
							type="text"
							name="firstName"
							id="firstName"
							className="p-2 w-full focus:outline-gray-200 rounded"
							placeholder="Firstname"
							value={info.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className="space-x-2">
						<input
							type="text"
							name="lastName"
							id="lastName"
							className="p-2 w-full focus:outline-gray-200 rounded"
							placeholder="Lastname"
							value={info.lastName}
							onChange={handleChange}
						/>
					</div>
					<div className="flex items-center  gap-5 text-lg">
						<p>Status</p>
						<div className="">
							<input
								type="radio"
								id="active"
								name="status"
								value="Active"
								onChange={handleChange}
								checked={info.status === "Active"}
							/>
							<label htmlFor="active">Active</label> <br />
							<input
								type="radio"
								id="inactive"
								name="status"
								value="Inactive"
								checked={info.status === "Inactive"}
								onChange={handleChange}
							/>
							<label htmlFor="inactive">Inactive</label>
						</div>
					</div>
					<button
						type="submit"
						className="text-center self-center w-full border border-gray-500 py-2 capitalize"
					>
						update contact
					</button>
				</form>
			</div>
		</section>
	);
}
