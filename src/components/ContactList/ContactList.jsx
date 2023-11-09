import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
// import { ContactsListItem } from 'components/ContactListItem/ContactListItem';
import { ContactsList, Item, Button } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';


export const ContactList = () => {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact());
  return (
    <ContactsList>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button type="button" name="delete" onClick={handleDelete}>
              delete
            </Button>
          }
        </Item>
      ))}
    </ContactsList>
  );

};

export default ContactList;