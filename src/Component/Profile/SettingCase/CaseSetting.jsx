import './settings.css'

export function CaseSetting() {
  return (
    <div className="case-setting-container">
      <div className="case-setting-row">
        <div className="case-setting-email">
          <p>kshitighelani@gmail.com</p>
        </div>
        <div>
          <button className="case-setting-btn">Change Password</button>
        </div>
      </div>
      <div className="case-setting-row">
        <div className="case-setting-email">
          <p>kshitighelani@gmail.com</p>
        </div>
        <div>
          <button className="case-setting-btn">Change Email</button>
        </div>
      </div>
      <div className="case-setting-row">
        <div className="case-setting-email">
          <p>kshitighelani@gmail.com</p>
        </div>
        <div>
          <button className="case-setting-btn">Modify Phone Number</button>
        </div>
      </div>
      <div className="case-setting-row">
        <div className="case-setting-email">
          <p>kshitighelani@gmail.com</p>
        </div>
        <div>
          <button className="case-setting-btn case-setting-btn-delete">Delete Account</button>
        </div>
      </div>
    </div>
  );
}
