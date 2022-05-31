import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redus/Contacts/contactSlice';
import { useRemoveContactMutation } from '../../redus/Contacts/contactSlice';
import styles from './ContactList.module.css';

export default function ContactList() {
  const [removeContact] = useRemoveContactMutation();
  const filter = useSelector(state => state.contacts.filter);
  const { data, isSuccess } = useFetchContactsQuery();

  return (
    <ul className={styles.contactList}>
      {isSuccess &&
        data
          .filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
          .map(contact => {
            return (
              <li className={styles.itemList} key={contact.id}>
                {contact.name}: {contact.phone}
                <button
                  className={styles.buttonDelete}
                  key={contact.id}
                  name={contact.name}
                  type="button"
                  onClick={() => removeContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
    </ul>
  );
}
