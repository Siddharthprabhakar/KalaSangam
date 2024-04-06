import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function Register1Step({ formData, handleChange, handleSubmitStep2 }) {
  const shouldShowOTP = () => {
    // Check if the country code is valid (starts with + followed by 2 or 3 digits)
    const countryCodeRegex = /^\+\d{2,3}$/;
    const isValidCountryCode = countryCodeRegex.test(formData.countryCode);

    // Check if the phone number is valid (10 digits)
    const phoneNumberRegex = /^\d{10}$/;
    const isValidPhoneNumber = phoneNumberRegex.test(formData.phoneNumber);

    // Show OTP input only if both country code and phone number are valid
    return isValidCountryCode && isValidPhoneNumber;
  };

  return (
    <div>
      <div className="field-group">
        <span aria-hidden="true">
          <FontAwesomeIcon icon={faLock} />
        </span>
        <div className="wthree-field">
          <input
            name="countryCode"
            type="text"
            value={formData.countryCode}
            onChange={handleChange}
            placeholder="Country Code"
            required
          />
        </div>
      </div>
      <div className="field-group">
        <span aria-hidden="true">
          <FontAwesomeIcon icon={faLock} />
        </span>
        <div className="wthree-field">
          <input
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
      </div>
      {/* OTP Verification */}
      {shouldShowOTP() && (
        <div className="field-group">
          <span aria-hidden="true">
            <FontAwesomeIcon icon={faLock} />
          </span>
          <div className="wthree-field">
            <input
              name="otp"
              type="text"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              required
            />
          </div>
        </div>
      )}
      {/* Submit Button */}
      <div className="wthree-field">
        <button type="submit" className="btn" onClick={handleSubmitStep2}>
          Register
        </button>
      </div>
    </div>
  );
}