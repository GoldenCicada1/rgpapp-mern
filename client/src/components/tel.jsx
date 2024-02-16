import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the styles
import { FaPhone } from "react-icons/fa";


export default function Tel() {
    const [phoneNumber, setPhoneNumber] = useState("");
   

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
    };

    return (
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
    );
}
