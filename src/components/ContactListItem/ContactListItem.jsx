import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactListItem.styled';

export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactItem>
      <ContactName>
        {contact.name}:<ContactNumber>{contact.number}</ContactNumber>
      </ContactName>
      <Button onClick={handleDeleteContact}>Delete</Button>
    </ContactItem>
  );
}

// ContactItem.propTypes = {
//   contact: PropTypes.object.isRequired,
// };

export default ContactItem;