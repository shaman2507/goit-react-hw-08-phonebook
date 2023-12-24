import { useSelector } from "react-redux";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ListContact/ContatcList";
import Loading from "components/Loading/Loading";
import { filterSelector } from "store/filterSlice/selectors";
import { contactsSelector } from "store/contactsSlice/selectors";

const ContactFormik = () => {
    const filter = useSelector(filterSelector);
    const {isLoading} = useSelector(contactsSelector);
    return (
        <div style={{ padding: "35px" }}>
            <h2>Phonebook</h2>
            <ContactForm />
            <h2>Contacts</h2>
                {isLoading && <Loading/>}
            { filter && <ContactList />}
            <Filter/>
        </div>
    )
}

export default ContactFormik