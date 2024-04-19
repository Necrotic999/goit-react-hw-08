import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import css from "./AuthForm.module.css";

const AuthForm = ({ initialValues, onSubmit, scheme, type, title }) => {
  return (
    <div className={css.formik}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={scheme}
      >
        <Form className={css.form}>
          {type === "register" && (
            <label>
              Name
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage
                className={css.error_message}
                component="div"
                name="name"
              />
            </label>
          )}
          <label>
            Email
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage
              className={css.error_message}
              component="div"
              name="email"
            />
          </label>
          <label>
            Password
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.error_message}
              component="div"
              name="password"
            />
          </label>
          <button className={css.btn} type="submit">
            {title}
          </button>
          {type === "register" ? (
            <div className={css.text_wrapper}>
              <p className={css.form_text}>Do you have an account?</p>
              <Link className={css.link} to="/login">
                Login
              </Link>
            </div>
          ) : (
            <div className={css.text_wrapper}>
              <p className={css.form_text}>You don`t have an account?</p>
              <Link className={css.link} to="/register">
                Register
              </Link>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
