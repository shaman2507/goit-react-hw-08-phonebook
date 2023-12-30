import { useSelector } from "react-redux";
import css from "pages/ContactFormik/ContactFormik.module.css";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ListContact/ContactList";
import Loading from "components/Loading/Loading";
import { filterSelector } from "store/filterSlice/selectors";
import { contactsSelector } from "store/contactsSlice/selectors";

const ContactFormik = () => {
    const filter = useSelector(filterSelector);
    const {isLoading} = useSelector(contactsSelector);
    return (
        <div className={css.contactFormik}>
            <div className={css.formikPhoneBook}>
                <h2 className={css.phoneBookTitle}>Phonebook</h2>
                <ContactForm />
            </div>
            
            <div className={css.contacts}>
                <h2 className={css.contactsTitle}>Contacts</h2>
                <Filter />
                {isLoading && <Loading />}
                { filter && <ContactList />}
                
            </div>
        </div>
    )
}

export default ContactFormik