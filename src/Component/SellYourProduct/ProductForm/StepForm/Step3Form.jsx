// eslint-disable-next-line react/prop-types
export default function Step3Form({ prevStep }) {
  return (
    <fieldset>
      <h3>Create Security Questions</h3>
      <h6>Please update your account with security questions</h6>
      <div className="custom-form-row">
        <div className="custom-form-group col-md-6">
          <h3 htmlFor="price">How much do you want to sell the item for?</h3>
        </div>
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            id="price"
            name="price"
            className="form-control"
            placeholder="Price of One Piece"
          />
        </div>
      </div>

      <div className="custom-form-row">
        <div className="custom-form-group col-md-6">
        <h3 htmlFor="quantity">How many items can you sell?</h3>
        </div>
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="form-control"
            placeholder="Quantity"
          />
        </div>
      </div>

      <div className="custom-form-row">
        <div className="custom-form-group col-md-6">
        <h3 htmlFor="colors">If color available, specify the color:</h3>
        </div>
        <div className="custom-form-group col-md-6">
          <input
            type="text"
            id="colors"
            name="colors"
            className="form-control"
            placeholder="colors"
          />
        </div>
      </div>

      <button
        type="button"
        className="action-button previous previous_button"
        onClick={prevStep}
      >
        Back
      </button>
      <a href="#" className="action-button">
        Finish
      </a>
    </fieldset>
  );
}
