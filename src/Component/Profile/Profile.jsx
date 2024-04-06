import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css"; // Import your custom CSS for styling
import { CaseProfile } from "./ProfileCase/CaseProfile";
import { CaseSetting } from "./SettingCase/CaseSetting";
import { CaseContact } from "./ContactCase/CaseContact";
import { CaseOrder } from "./OrderHistoryCase/CaseOrder";

export function Profile() {
  const [activeTab, setActiveTab] = useState("profile"); // State to track active tab
  const userDetails = JSON.parse(sessionStorage.getItem("user_details"));
  if(userDetails.username === "" && userDetails?.password === "") {
    console.log("User is not logged in")
  } else {
    console.log("Username: " + userDetails.username + " Password: " + userDetails.password)
  }
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
         <CaseProfile username={userDetails.username} />
        );
      case "Settings":
        return (
          <CaseSetting />
        );
      case "Contact Us":
        return (
          <CaseContact />
        );
      case "Order History":
        return (
          <CaseOrder />
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: "white", height: "70ch" }}>
      <div className="container emp-profile">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt=""
              />
              <div className="file-container" style={{ marginTop: "20px" }}>
                <label htmlFor="fileInput" className="btn btn-primary">
                  Change Photo
                </label>
                <input
                  type="file"
                  id="fileInput"
                  name="file"
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="profilebuttons-container">
              <button
                className="btn btn-primary"
                onClick={() => setActiveTab("profile")}
              >
                Profile
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setActiveTab("Settings")}
              >
                Settings
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setActiveTab("Contact Us")}
              >
                Contact Us
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setActiveTab("Order History")}
              >
                Order History
              </button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile-name">
              <h3>{userDetails.username}</h3>
            </div>
            <div className="section-title">
              <h4>{activeTab === "profile" ? "Profile" : activeTab}</h4>
            </div>
            <div className="section-content">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
