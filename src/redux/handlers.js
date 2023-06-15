export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
export const handleSuccess = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = '';
};
export const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.contacts.push(payload);
  state.error = '';
};

export const handleDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
  state.error = '';
};
