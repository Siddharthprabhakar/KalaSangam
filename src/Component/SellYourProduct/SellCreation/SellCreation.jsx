import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreationOne } from "./CreationSteps/CreationOne";

export function SellCreation() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    countryCode: "",
    phoneNumber: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      // Check if the seller or user account exists (replace true with your actual logic)
      const isSellerOrUserExists = true;

      if (isSellerOrUserExists) {
        // Case 1: Seller or user account exists
        // Redirect to login page for authentication
        navigate('/login');
      } else {
        // Case 2: Seller or user account doesn't exist
        // Show creation page to create seller account
        setStep(2); // Move to the next step for seller account creation
      }
    } else if (step === 2) {
      // Handle seller account creation logic
      createSellerProfile();
    }
  };

  const createSellerProfile = () => {
    // Logic to create seller profile
    // For example, send API request to create seller profile
    // Once seller profile is created, redirect to ProductForm
    navigate('/product-form'); // Redirect to ProductForm after successful creation
  };

  return (
    <div>
      <div>
        <div>
          <div>
              <form
                id="msform"
                style={{ marginTop: "100px", textAlign: "center" }}
              >
                {/* Fieldset for step 1 */}
                <fieldset
                  style={{
                    display: step === 1 ? "block" : "none",
                  }}
                >
                  <CreationOne 
                    handleNext={handleNext}
                  />
                </fieldset>
                {/* Fieldset for step 2 */}
                <fieldset
                  style={{
                    display: step === 2 ? "block" : "none",
                    textAlign: "center",
                  }}
                >
                  {/* Your form fields for seller account creation */}
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
                  {/* Other form fields */}
                  <button type="button" onClick={createSellerProfile}>Create Seller Account</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
