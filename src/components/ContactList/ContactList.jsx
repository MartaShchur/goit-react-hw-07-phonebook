import { useSelector } from 'react-redux';
import {getContacts, getFilter } from 'redux/selectors';
import {ContactsListItem}  from 'components/ContactListItem/ContactListItem';
// import { ContactsList, Item, Button } from './ContactList.styled';
// import { deleteContact } from 'redux/contactsSlice';


//  const normalizedFilter = filter.toLowerCase();
// const getFilteredContacts = contact.filter(({ name }) =>
//         (name.toLowerCase().includes(normalizedFilter)));

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} contact={{ id, name, number }} />
      ))}
    </ul>
  );
}

export default ContactList;