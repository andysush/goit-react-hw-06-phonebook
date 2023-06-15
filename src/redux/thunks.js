import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getAllContacts,
} from 'components/services/mockapiDb';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    try {
      return await getAllContacts();
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      return await addContact(contact);
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      return await deleteContact(id);
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
