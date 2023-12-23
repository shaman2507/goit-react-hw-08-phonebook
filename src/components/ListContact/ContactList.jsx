import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactsThunk,
  getAllContactsThunk,
} from 'store/contactsSlice/operationsContacts';
import { deleteContacts } from 'store/contactsSlice/contactsSlice';
import { selectAuth } from 'store/auth/selectors';

const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const token = useSelector(selectAuth);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    const deleteC = contacts.contacts.filter(
      contact => contact.id !== contactId
    );
    dispatch(deleteContacts(deleteC));
    dispatch(deleteContactsThunk(contactId));
    dispatch(getAllContactsThunk(token));
  };

  const newFilteredContacts = filter
    ? contacts.contacts.filter(
        contact =>
          contact.name &&
          contact.name.toLowerCase().includes(filter.filter.toLowerCase())
      )
    : contacts.contacts;

  return (
    newFilteredContacts.length > 0 && (
      <ul>
        {newFilteredContacts.map(({ name, id, number }) => (
          <li key={id} id={id} className={css.itemList}>
            {name}: {number}
            <button onClick={() => deleteContact(id)} className={css.btn}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
};

export default ContactList;