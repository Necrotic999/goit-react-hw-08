import css from "./Contact.module.css";
import { BiSolidUser } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  function handleDeleteContact(id) {
    dispatch(deleteContact(id));
    toast.success("Contact was deleted");
  }
  return (
    <li className={css.user}>
      <div className={css.wrapper}>
        <div className={css.inner_wrapper}>
          <BiSolidUser />
          <h3 className={css.username}>{contact.name}</h3>
        </div>
        <div className={css.inner_wrapper}>
          <FaPhone />
          <p className={css.user_number}>{contact.number}</p>
        </div>
      </div>
      <button
        className={css.button}
        onClick={() => handleDeleteContact(contact.id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
