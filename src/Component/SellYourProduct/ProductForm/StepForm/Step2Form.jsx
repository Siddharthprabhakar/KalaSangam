import { useState } from "react";
import "../productform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCloud } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function Step2Form({ prevStep, nextStep }) {
  const [filesUploaded, setFilesUploaded] = useState([]);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [materialUsed, setMaterialUsed] = useState("");
  const handleFileUpload = (e) => {
    const files = e.target.files;
    const fileNames = Array.from(files).map((file) => file.name);
    setFilesUploaded(fileNames);
    setShowSuccessDialog(true); // Show the success dialog
  };

  const closeSuccessDialog = () => {
    setShowSuccessDialog(false); // Close the success dialog
  };

  return (
    <fieldset>
      <h3>Verify Your Identity</h3>
      <h6>Please upload any of these documents to verify your Identity.</h6>
      <div className="custom-form-row">
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Product Category"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </div>
      </div>
      <div className="custom-form-row">
        <div className="custom-form-group col-md-6">
          <textarea
            placeholder="Product Description"
            value={productDescription}
            className="form-control"
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            placeholder="Material Used"
            value={materialUsed}
            className="form-control"
            onChange={(e) => setMaterialUsed(e.target.value)}
          />
      </div>
      </div>
    <div className="passport">
      <h4>Upload Product Images (at least 5)</h4>
    </div>
    <div className="input-group">
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="upload"
          onChange={handleFileUpload}
          multiple
        />
        <label className="custom-file-label" htmlFor="upload">
          <FontAwesomeIcon icon={faCloud} /> Choose file
        </label>
      </div>
    </div>


      {filesUploaded.length > 0 && (
        <ul className="file_added">
          <li>File Added:</li>
          {filesUploaded.map((fileName, index) => (
            <li key={index}>
              <a href="#">{fileName}</a>
              <a href="#" className="don_icon">
                <FontAwesomeIcon icon={faCheck} />
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Container for buttons */}
      <div className="button-container">
        <button
          type="button"
          className="action-button previous previous_button"
          onClick={prevStep}
        >
          Back
        </button>
        <button type="button" className="next action-button" onClick={nextStep}>
          Continue
        </button>
      </div>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="success-dialog">
          <div className="success-dialog-content">
            <h2>Images Uploaded Successfully!</h2>
            <p>Your images have been uploaded successfully.</p>
            <button className="close-dialog" onClick={closeSuccessDialog}>
              Close
            </button>
          </div>
        </div>
      )}
    </fieldset>
  );
}
