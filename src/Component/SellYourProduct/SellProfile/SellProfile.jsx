import { useState } from "react";
import { CaseProfile } from "../../Profile/ProfileCase/CaseProfile";
import { CaseSetting } from "../../Profile/SettingCase/CaseSetting";
import "./sellerprofile.css"; // Import the CSS file for styling
import { ProductTrack } from "./ProductTrack/ProductTrack";
import { SellerStats } from "./SellerStats/SellerStats";

export default function SellProfile() {
  const [selectedOption, setSelectedOption] = useState("profile");

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? "" : option);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <section style={{ marginTop: "20px", overflowY: "hidden" }}>
        <div className="container py-4">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <p className="text-dark mt-3">Full Stack Developer</p>
                  <p className="text-dark">Bay Area, San Francisco, CA</p>
                  <div className="sellerbutton-container">
                    <div className="sellerbutton-row">
                      <button
                        className={`sellerbutton-btn ${
                          selectedOption === "profile" ? "active" : ""
                        }`}
                        onClick={() => handleOptionClick("profile")}
                      >
                        Profile
                      </button>
                      <button
                        className={`sellerbutton-btn ${
                          selectedOption === "settings" ? "active" : ""
                        }`}
                        onClick={() => handleOptionClick("settings")}
                      >
                        Settings
                      </button>
                      <button
                        className={`sellerbutton-btn ${
                          selectedOption === "products" ? "active" : ""
                        }`}
                        onClick={() => handleOptionClick("products")}
                      >
                        Products
                      </button>
                      <button
                        className={`sellerbutton-btn ${
                          selectedOption === "stats" ? "active" : ""
                        }`}
                        onClick={() => handleOptionClick("stats")}
                      >
                        Stats
                      </button>
                      <button
                        className={`sellerbutton-btn ${
                          selectedOption === "help" ? "active" : ""
                        }`}
                        onClick={() => handleOptionClick("help")}
                      >
                        Help
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  {selectedOption === "profile" && <CaseProfile />}
                  {selectedOption === "settings" && <CaseSetting />}
                  {selectedOption === "products" && <ProductTrack />}
                  {selectedOption === "stats" && <SellerStats />}
                  {selectedOption === "help" && (
                    <>
                      <p>Help content goes here</p>
                      {/* Add help content */}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
