import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contactsSlice';
import { Form, Label, Button, Input } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // console.log(contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name ${name} already exists!`,
        'Ok'
      );
      return;
    }

    const isNumberExist = contacts.find(
      contact => contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (isNumberExist) {
      Notiflix.Report.warning(
        'Alert',
        `Number ${number} is already in contacts!`,
        'Ok'
      );
      return;
    }

    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off" >
      <Label>
        Name
        </Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          // placeholder="Enter name"
          value={name}
        onChange={handleNameChange}   
        />

      
      <Label>
        Number
        </Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
           value={number}
        onChange={handleNumberChange}
        />
      
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;

