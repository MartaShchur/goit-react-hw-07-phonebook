import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import {ContactsListItem}  from 'components/ContactListItem/ContactListItem';
import { Loader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/operations';

export const ContactList = () =>  {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error ? (
        <Loader />
      ) : filteredContacts.length === 0 && !error ? (
        <p>The Phonebook is empty. Add your first contact.</p>
      ) : (
        filteredContacts.map(({ id, name, phone }) => (
          <ContactsListItem key={id} contact={{ id, name, phone }} />
        ))
      )}
    </ul>
  );
}

export default ContactList;


