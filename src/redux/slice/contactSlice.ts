import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IContact {
	id?: string;
	firstName: string;
	lastName: string;
	status: string;
}
interface InitialStateType {
	data: IContact[];
}
const initialState: InitialStateType = {
	data: [],
};

export const contactSlice = createSlice({
	name: "contactSlice",
	initialState,

	reducers: {
		//add contact
		addContact: (state, action: PayloadAction<IContact>) => {
			state.data.unshift({ ...action.payload, id: Date.now().toFixed() });
		},

		//delete contact from contact lists
		deleteContact: (state, action: PayloadAction<string>) => {
			state.data = state.data.filter((data) => data.id !== action.payload);
		},

		//update contact
		updateContact: (state, action: PayloadAction<IContact>) => {
			state.data.map((val) => {
				if (val.id === action.payload.id) {
					val.firstName = action.payload.firstName;
					val.lastName = action.payload.lastName;
					val.status = action.payload.status;
				}
			});
		},
	},
});

export const { addContact, deleteContact, updateContact } =
	contactSlice.actions;
export default contactSlice.reducer;

//this will help us. now we don't need to call contact lists using useAppSeclector in other components.
export const contactLists = (state: RootState) => state.contacts;
