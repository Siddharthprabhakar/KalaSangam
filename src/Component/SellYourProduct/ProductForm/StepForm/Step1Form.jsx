import { useState, useEffect } from "react";
import countryCallingCodes from "./CountryCodes.json"; // Assuming this is the correct path to your JSON file
import "../productform.css";

// eslint-disable-next-line react/prop-types
export default function Step1Form({ nextStep }) {
  const [countryCodes, setCountryCodes] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    state: "",
    pincode: "",
    countryCode: "",
    mobileNumber: "",
    showOtp: false, // Added state for showing OTP option
  });

  useEffect(() => {
    setCountryCodes(countryCallingCodes);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    // Check if both country code and mobile number are entered to show OTP option
    if (formData.countryCode && value.length === 10) {
      setFormData((prevData) => ({
        ...prevData,
        showOtp: true,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        showOtp: false,
      }));
    }
  };

  return (
    <fieldset> 
      <h3>Seller Information</h3>
      <h6>Please provide the following details to complete your seller profile.</h6>
      <div className="custom-form-row">
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="custom-form-row">
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="custom-form-row">
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="custom-form-row">
        <div className="custom-form-group col-md-6">
          <select
            id="countryCode"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select Country Code</option>
            {countryCodes.map((codeObj) => (
              <option key={codeObj.code} value={codeObj.code}>
                {codeObj.name} ({codeObj.dial_code})
              </option>
            ))}
          </select>
        </div>
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            maxLength={10}
            required
          />
        </div>
      </div>
      {formData.showOtp && (
        <div>
          <div className="done_text">
            <a href="#" className="don_icon">
              <i className="ion-android-done"></i>
            </a>
            <h6>
              A secret code is sent to your phone. <br />
              Please enter it here.
            </h6>
          </div>
          <div className="code_group">
            <input type="text" className="form-control" placeholder="0" />
            <input type="text" className="form-control" placeholder="0" />
            <input type="text" className="form-control" placeholder="0" />
            <input type="text" className="form-control" placeholder="0" />
          </div>
        </div>
      )}
      <button
        type="button"
        className="next action-button"
        onClick={nextStep}
      >
        Continue
      </button>
    </fieldset>
  );
}
