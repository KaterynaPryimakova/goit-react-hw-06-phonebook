import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import {
  addContact,
  deleteContact,
  setFilter,
} from '../redux/contacts/contactsReducer';

import { ContactForm, ContactList, Filter } from 'components';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.phonebook.contacts);
  const filter = useSelector(store => store.phonebook.filter);

  const updateState = contactData => {
    const alreadyExist = contacts.some(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (alreadyExist) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }
    const newContact = {
      ...contactData,
      id: nanoid(),
    };

    const action = addContact(newContact);
    dispatch(action);
  };

  const handleDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const handleFindContact = e => {
    const action = setFilter(e.target.value);
    dispatch(action);
  };

  const getFilteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm title="Phonebook" getNewContact={updateState} />

      <h2>Contacts</h2>
      <Filter findContact={handleFindContact} filter={filter} />
      <ContactList
        title="Contacts"
        contacts={getFilteredContacts()}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};
