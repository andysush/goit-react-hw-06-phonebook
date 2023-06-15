import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunks';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePanding = state => {
  state.isLoading = true;
};
const handleSuccess = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = '';
};
const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.error = '';
};

const handleAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.contacts.push(payload);
  state.error = '';
};

const handleDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePanding)
      .addCase(getContactsThunk.fulfilled, handleSuccess)
      .addCase(getContactsThunk.rejected, handleError)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact);
  },
});

export const contactReducer = contactSlice.reducer;
