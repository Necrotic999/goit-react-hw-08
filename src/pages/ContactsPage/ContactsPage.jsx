import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/contactsSlice.js";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.contacts_page}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className="text">You dont have contacts!!!</p>
      )}
    </div>
  );
};

export default ContactsPage;
