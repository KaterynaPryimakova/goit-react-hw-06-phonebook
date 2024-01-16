const CONTACTS = 'contacts';

const initialState = {
  contacts: JSON.parse(localStorage.getItem(CONTACTS)) ?? [],
  filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  return state;
};
