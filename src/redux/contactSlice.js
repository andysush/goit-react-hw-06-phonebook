import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    delContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, delContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
