import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { deleteContacts } from 'redux/operations';
import {
  ContactItem,
  ContactName,
  ContactPhone,
  Button,
} from './ContactListItem.styled';

export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <ContactItem>
      <ContactName>
        {contact.name}:<ContactPhone>{contact.phone}</ContactPhone>
      </ContactName>
      <Button onClick={handleDeleteContact}>Delete</Button>
    </ContactItem>
  );
}

// ContactItem.propTypes = {
//   contact: PropTypes.object.isRequired,
// };

export default ContactItem;