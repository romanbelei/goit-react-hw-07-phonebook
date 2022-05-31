import { useState } from 'react';
import styles from './ContactForm.module.css';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redus/Contacts/contactSlice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useFetchContactsQuery();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        return setName(e.currentTarget.value);
      case 'number':
        return setNumber(e.currentTarget.value);
      default:
        return;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const noUniqueName = data
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    if (noUniqueName) {
      return alert(`${name} is already in contacts`);
    } else {
      addContact({ name: name, phone: number });
      reset();
    }
  };
  return (
    <form className={styles.inputForm} onSubmit={handleOnSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.submit} type="submit">
        Add contact
      </button>
    </form>
  );
}
