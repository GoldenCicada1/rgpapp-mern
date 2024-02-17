import { useState } from "react";

import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the styles
import { FaPhone } from "react-icons/fa";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    setFormData({
      ...formData,
      phoneNumber: value, // Update formData with phoneNumber
    });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (formData.password !== formData.confirmPassword) {
        setError("Password and confirm password do not match");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);

      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      } else {
        setError(null);
      }
      setLoading(false);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
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

            <div className="  text-center">
              <h3 className="text-2xl font-semibold text-dark mb-3">
                Create an Account
              </h3>
              <p className="text-base font-medium text-light">
                Welcome! Select a method to sign up
              </p>
              <br />

              {error && <p className="text-red-500 font-semibold">{error}</p>}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="text-start w-full">
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
                htmlFor="username"
                className="block text-base font-semibold text-dark mb-2"
              >
                Full Name
              </label>
              <div className="flex">
                <input
                  id="username"
                  autoComplete="username"
                  className="w-full rounded-l-md py-2.5 px-4 shadow-xl 
                  text-dark text-base font-medium border
                   border-gray-300 focus:ring focus:ring-gray-300 
                   focus:outline-none focus:border-primary 
                   placeholder-light placeholder-base"
                  type="text"
                  placeholder="Enter Your Full Name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-base font-semibold text-dark mb-2"
              >
                Email address
              </label>
              <div className="flex">
                <input
                  id="email"
                  autoComplete="email"
                  className="w-full rounded-l-md py-2.5 px-4 shadow-xl 
                  text-dark text-base font-medium border
                   border-gray-300 focus:ring focus:ring-gray-300 
                   focus:outline-none focus:border-primary 
                   placeholder-light placeholder-base"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center py-2.5 px-4 
                  shadow-xl border border-l-0 rounded-r-md -ms-px border-gray-300"
                >
                  <FaEnvelope className="w-5 h-5 text-dark" />
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="phoneInput"
                className="block text-base font-semibold text-dark mb-2"
              >
                Phone Number
              </label>
              <div className="flex">
                <PhoneInput
                  id="phoneInput"
                  autoComplete="tel" // Corrected attribute name
                  name="phoneNumber"
                  country={"tz"}
                  value={phoneNumber}
                  onChange={handlePhoneChange} // Changed to a function
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                    placeholder: "Enter your Phone Number",
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
                <button
                  type="button"
                  className="inline-flex items-center justify-center py-2.5 px-4 
                  shadow-xl border border-l-0 rounded-r-md -ms-px border-gray-300"
                >
                  <FaPhone className="w-5 h-5 text-dark" />
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
                  autoComplete="new-password"
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
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-base font-semibold text-dark mb-2"
              >
                Confirm Password
              </label>
              <div className="flex">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  autoComplete="new-password"
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
                  onClick={toggleConfirmPasswordVisibility}
                  className="inline-flex items-center justify-center py-2.5 px-4 
                  shadow-xl border border-l-0 rounded-r-md -ms-px border-gray-300"
                >
                  {confirmPasswordVisible ? (
                    <FaEyeSlash className="w-5 h-5 text-dark" />
                  ) : (
                    <FaEye className="w-5 h-5 text-dark" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center flex-wrap gap-x-1 gap-y-2 mb-6 mt-3">
              <div className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="checkbox-signup"
                  className="h-4 w-4 text-base rounded border-gray-300 text-dark focus:ring focus:ring-default-950/30 focus:ring-offset-0"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label
                  className="text-base ms-2 text-light font-medium align-middle select-none"
                  htmlFor="checkbox-signup"
                >
                  I accept
                  <Link
                    to="/terms_conditions"
                    className="font-semibold text-dark hover:text-blue-500 disabled:opacity-80 p-1"
                  >
                    Terms & Conditions
                  </Link>
                </label>
              </div>
            </div>

            <div className="text-center mb-7">
              <button
                disabled={loading || !isChecked}
                className="w-full inline-flex items-center shadow-xl
                    justify-center px-6 py-2.5 bg-blue-500 font-bold 
                    hover:bg-blue-600 disabled:opacity-70
                    text-base text-white rounded-md transition-all duration-500"
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </div>

            <p className="shrink text-light text-center">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="text-dark text-lg ms-1 hover:font-semibold disabled:opacity-80"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>

        <div className="fixed hidden xl:block w-1/2 h-screen right-0">
          <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/webauthasse2t.jpg?alt=media&token=cc4d5c22-50d4-4052-a17e-6ee3c1c20e93)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
