import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  addContact,
  deleteContact,
  setFilter,
} from '../redux/contacts/contactsReducer';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contacts);
  const filter = useSelector(store => store.contacts.filter);

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
