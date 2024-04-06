import { useState } from "react";
import Step1Form from "./StepForm/Step1Form";
import Step2Form from "./StepForm/Step2Form"; 
import Step3Form from "./StepForm/Step3Form"; 
import "./productform.css";

export function ProductForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  let stepTitle, stepDescription;

  switch (currentStep) {
    case 1:
      stepTitle = "Seller Verification";
      stepDescription = "To start selling your products, please complete the verification process. This helps ensure a secure and trustworthy marketplace for buyers and sellers.";
      break;
    case 2:
      stepTitle = "Product Information";
      stepDescription = "Upload the necessary documents to complete the verification process.";
      break;
    case 3:
      stepTitle = "Pricing and Extra Details";
      stepDescription = "Answer the following security questions to enhance the security of your account.";
      break;
    default:
      stepTitle = "Seller Verification";
      stepDescription = "To start selling your products, please complete the verification process. This helps ensure a secure and trustworthy marketplace for buyers and sellers.";
  }

  return (
    <section className="multi_step_form">
      <form id="msform">
      <div className="tittle">
          <h2>{stepTitle}</h2>
          <p>{stepDescription}</p>
      </div>
        <ul id="progressbar">
          <li className={currentStep === 1 ? "active" : ""}>Verify Phone</li>
          <li className={currentStep === 2 ? "active" : ""}>
            Upload Documents
          </li>
          <li className={currentStep === 3 ? "active" : ""}>
            Security Questions
          </li>
        </ul>
        {currentStep === 1 && <Step1Form nextStep={nextStep} />}
        {currentStep === 2 && <Step2Form prevStep={prevStep} nextStep={nextStep} />}
        {currentStep === 3 && <Step3Form prevStep={prevStep} />}
      </form>
    </section>
  );
}
