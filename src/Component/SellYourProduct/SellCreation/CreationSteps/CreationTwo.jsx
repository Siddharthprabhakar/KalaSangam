import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function CreationTwo({ formData, handleChange, handlePrevious, handleNext }) {
    
  CreationTwo.propTypes = {
    formData: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      confirmPassword: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      otp: PropTypes.string.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handlePrevious: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
  };

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
      <div className="form-card d-inline-block text-start">
        <h2 className="fs-title">Verification</h2>
        <div className="form-outline mb-4">
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="countryCode">
              Country Code
            </label>
            <input
              style={{
                backgroundColor: "#d7d7d7",
                fontWeight: "500",
                color: "black",
              }}
              name="countryCode"
              type="text"
              id="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="form-control form-control-lg"
              required
              disabled={shouldShowOTP()}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="countryCode">
              Phone Number
            </label>
            <input
              style={{
                backgroundColor: "#d7d7d7",
                fontWeight: "500",
                color: "black",
              }}
              name="phoneNumber"
              type="text"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-control form-control-lg"
              required
              disabled={shouldShowOTP()}
            />
          </div>

          {/* OTP Verification */}
          {shouldShowOTP() && (
            <div className="form-outline mb-4">
              <label
                className="form-label"
                htmlFor="countryCode"
                style={{ fontWeight: "800" }}
              >
                Enter the 6 digit code sent to your phone number:
              </label>
              <input
                style={{
                  backgroundColor: "#d7d7d7",
                  fontWeight: "500",
                  color: "black",
                }}
                name="otp"
                type="text"
                value={formData.otp}
                onChange={handleChange}
                className="form-control form-control-lg"
                required
              />
            </div>
          )}
          {/* Submit Button */}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <Link
              to="/profile"
              className="btn btn-primary"
              onClick={handleNext}
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
