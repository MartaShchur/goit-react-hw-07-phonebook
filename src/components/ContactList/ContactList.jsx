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

  // console.log(filteredContacts);

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
        filteredContacts.map(({ id, name, number }) => (
          <ContactsListItem key={id} contact={{ id, name, number }} />
        ))
      )}
    </ul>
  );
}

export default ContactList;


