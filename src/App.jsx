import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute.jsx";
import RestrictedRoute from "./routes/RestrictedRoute/RestrictedRoute.jsx";
import { selectIsRefreshing } from "./redux/auth/authSlice.js";
import { MutatingDots } from "react-loader-spinner";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <MutatingDots
        visible={true}
        height="500"
        width="500"
        color="#e4f007"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  ) : (
    <>
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
