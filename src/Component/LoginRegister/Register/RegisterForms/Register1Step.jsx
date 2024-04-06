import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faCakeCandles } from "@fortawesome/free-solid-svg-icons";

export default function Register2Step({ formData, handleChange, handleSubmitStep2 }) {
  return (
    <div>
         {/* Step 1 Fields */}
         <div className="field-group">
            <span aria-hidden="true">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <div className="wthree-field">
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>
          </div>
          
          <div className="field-group">
            <span aria-hidden="true">
                <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <div className="wthree-field">
              <input
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
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
                name="password"
                type="text"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
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
                name="confirmPassword"
                type="text"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>

          <div className="field-group">
            <span aria-hidden="true">
            <FontAwesomeIcon icon={faCakeCandles} />
            </span>
            <div className="wthree-field">
            <input
                name="birthdate"
                type="date"
                value={formData.birthdate}
                onChange={handleChange}
                placeholder="Enter Birth Date"
                required
              />
            </div>
          </div>

          {/* Other Step 1 fields */}
         <div className="wthree-field">
          <button type="submit" className="btn">
            Get Started
          </button>
        </div>
    </div>
  )
}