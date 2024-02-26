import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Terms_Conditions from "./pages/Terms_Conditions";
import CreateProduct from "./pages/CreateProduct";
import Videos from "./pages/Videos";



// Layout component without the header
const AuthLayout = ({ children }) => <>{children}</>;
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthLayout>
              <Header />
              <Home />
            </AuthLayout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/terms_conditions" element={<Terms_Conditions />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
          <Route
            path="/create-product"
            element={
              <>
                <Header />
                <CreateProduct />
              </>
            }
          />
          <Route
            path="/videos"
            element={
              <>
                <Header />
                <Videos />
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
