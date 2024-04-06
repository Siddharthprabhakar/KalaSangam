export function CaseProfile({ username }) {
  return (
    <div>
      <div className="tab-content profile-tab" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="row">
            <div className="col-md-6">
              <label>Name</label>
            </div>
            <div className="col-md-6">
              <p>{username}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Gender</label>
            </div>
            <div className="col-md-6">
              <p>Male</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Email</label>
            </div>
            <div className="col-md-6">
              <p>kshitighelani@gmail.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Phone</label>
            </div>
            <div className="col-md-6">
              <p>123 456 7890</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Birth Date</label>
            </div>
            <div className="col-md-6">
              <p>13-08-2003</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
