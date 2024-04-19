import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.home_title}>
        This is home page of your contacts list
      </h1>
    </div>
  );
};

export default HomePage;
