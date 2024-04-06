import { useState } from "react";
import Register1Step from "./RegisterForms/Register1Step";
import Register2Step from "./RegisterForms/Register2Step";

export function RegisterForm() {
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

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    // Validation logic for step 1 fields
    setStep(2); // Move to step 2
  };

  const handleSubmitStep2 = (e) => {
    e.preventDefault();
    // Validation logic for step 2 fields
    // Submit the form data
  };

  return (
    <div>
      {step === 1 && (
        <form onSubmit={handleSubmitStep1}>
         <Register1Step 
         formData={formData}
         handleChange={handleChange}
         handleSubmitStep2={handleSubmitStep1}
         />
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmitStep2}>
          <Register2Step 
           formData={formData}
           handleChange={handleChange}
           handleSubmitStep2={handleSubmitStep2}
           />
        </form>
      )}
    </div>
  );
}
