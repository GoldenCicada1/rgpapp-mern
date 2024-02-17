import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import { FaEye, FaEyeSlash, FaEnvelope, FaPhone } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [inputType, setInputType] = useState("email");
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter your email");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleInputType = () => {
    setInputType((prevType) =>
      prevType === "email" ? "phoneNumber" : "email"
    );
    setPlaceholder((prevType) =>
      prevType === "Enter your email"
        ? "Enter your phone number"
        : "Enter your email"
    );
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    // Also update the formData object if needed
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password } = formData;
    let identifier;

    if (inputType === "email") {
      identifier = formData.email;
    } else {
      identifier = phoneNumber;
    }

    if (!identifier) {
      console.error("Please enter either email or phone number");
      return;
    }
    try {
      dispatch(signInStart());
      const payload = { identifier, password };

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      } else {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  console.log(formData);

  return (
    <section className="h-screen w-full">
      <div className="grid xl:grid-cols-2 grid-cols-1 h-full">
        <div className="max-w-lg mx-auto w-full flex flex-col justify-center md:items-start items-center p-6">
          <div className="self-center md:text-start text-center mb-7">
            <a href="/" className="block mb-3">
              <img
                className="h-8 mx-auto"
                src="https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/Official%20Logo2.png?alt=media&token=7cb15219-59ce-43a8-b926-6cd35cc0dfe3"
                alt="logo"
              />
            </a>

            <div className="text-center">
              <h3 className="text-2xl font-semibold  text-dark mb-2">
                Welcome To <br /> REAL GENERIC PLATFORM
              </h3>
              <p className="text-base font-medium text-light">
                Welcome Back! Select Method to Sign In
              </p>

              <br />

              {error && <p className="text-red-500 font-semibold">{error}</p>}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex md:justify-between justify-center items-center mb-8 md:gap-9 gap-2">
              <OAuth />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center 
                    gap-4 px-6 py-2.5 font-medium border border-gray-300 bg-white text-dark 
                    hover:bg-blue-100 disabled:opacity-80
                    rounded-md transition-all duration-500 group shadow-xl"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/facebook.png?alt=media&token=062f835b-3035-437c-8d9e-e6b8e792acdd"
                  alt="FacebookLogo"
                  className="w-5 h-5 text-dark"
                />
                Facebook
              </button>
            </div>

            <div className="mb-4">
              <label
                htmlFor={inputType === "email" ? "email" : "phoneNumber"}
                className="block text-base font-semibold text-dark mb-2"
              >
                {inputType === "email" ? "Email address" : "Phone number"}
              </label>

              <div className="flex">
                {inputType === "email" ? (
                  <input
                    id="email"
                    autoComplete="email"
                    className="w-full rounded-md py-2.5 px-4 text-dark 
                    text-base font-medium border-gray-300 focus:ring
                     focus:ring-gray-300 focus:outline-none shadow-xl
                     focus:border-primary placeholder-light placeholder-base"
                    type={inputType}
                    placeholder={
                      inputType === "email"
                        ? "Enter your email"
                        : "Enter your phone number"
                    }
                    onChange={handleChange}
                  />
                ) : (
                  <PhoneInput
                    id="phoneNumber"
                    autocomplete="tel"
                    name="phoneNumber"
                    country={"tz"}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: false,
                      placeholder: placeholder,
                    }}
                    inputStyle={{
                      width: "100%",

                      height: "calc(2.5rem + 2px)",
                      padding: "0.9rem 3rem",
                      fontSize: "1rem",
                      borderRadius: "0.375rem 0px px 0.375rem",
                      borderWidth: "1px",
                    }}
                  />
                )}
                <button
                  type="button"
                  onClick={toggleInputType}
                  className="inline-flex items-center justify-center py-2.5 px-4 border border-l-0 rounded-r-md -ms-px border-gray-300"
                >
                  {inputType === "email" ? (
                    <FaPhone className="w-5 h-5 text-dark" />
                  ) : (
                    <FaEnvelope className="w-5 h-5 text-dark" />
                  )}
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-base font-semibold text-dark mb-2"
              >
                Password
              </label>
              <div className="flex">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  className="w-full rounded-l-md py-2.5 px-4 shadow-xl 
                  text-dark text-base font-medium border
                   border-gray-300 focus:ring focus:ring-gray-300 
                   focus:outline-none focus:border-primary 
                   placeholder-light placeholder-base"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="inline-flex items-center justify-center py-2.5 px-4 
                  shadow-xl border border-l-0 rounded-r-md -ms-px border-gray-300"
                >
                  {passwordVisible ? (
                    <FaEyeSlash className="w-5 h-5 text-dark" />
                  ) : (
                    <FaEye className="w-5 h-5 text-dark" />
                  )}
                </button>
              </div>
            </div>

            <div
              className="flex justify-between items-center 
                flex-wrap gap-x-1 gap-y-2 mb-6 mt-3"
            >
              <div className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="checkbox-signin"
                  className="w-4 h-4 text-base border-gray-300 text-dark focus:ring 
                        focus:ring-default-950/30 focus:ring-offset-0"
                />
                <label
                  className="ms-2 text-base text-light font-medium select-none"
                  htmlFor="checkbox-signin"
                >
                  Remember me
                </label>
              </div>
              <a
                href="auth-recoverpw.html"
                className="text-base text-dark hover:font-semibold disabled:opacity-80 "
              >
                <small>Forgot Your Password?</small>
              </a>
            </div>

            <div className="text-center mb-7">
              <button
                disabled={loading}
                className="w-full inline-flex items-center shadow-xl
                    justify-center px-6 py-2.5 bg-blue-500 font-bold 
                    hover:bg-blue-700 disabled:opacity-80
                    text-base text-white rounded-md transition-all duration-500"
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
            <div>
              <p className=" text-light text-center">
                Dont have an Account?
                <Link
                  to="/sign-up"
                  className="text-dark text-lg ms-1 hover:font-semibold disabled:opacity-80"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="fixed hidden xl:block w-1/2 h-screen right-0">
          <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/webauthasse2t.jpg?alt=media&token=cc4d5c22-50d4-4052-a17e-6ee3c1c20e93)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
