import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const scheme = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "A lot symbols!")
      .required("Required field"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "A lot symbols!")
      .required("Required field"),
  });

  function handleSubmit(data, option) {
    dispatch(addContact(data));
    option.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={scheme}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name"></Field>
          <ErrorMessage
            className={css.error_message}
            component="div"
            name="name"
          />
        </label>
        <label className={css.label}>
          Number
          <Field className={css.input} type="text" name="number"></Field>
          <ErrorMessage
            className={css.error_message}
            component="div"
            name="number"
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
