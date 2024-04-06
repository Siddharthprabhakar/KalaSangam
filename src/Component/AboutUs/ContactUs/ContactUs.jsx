import { useState, useEffect } from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope,
  faPaperPlane,  
  faMapMarker, 
  faPhone,
  faFaceFrown,
  faTrainSubway,
  faExchange,
  faFaceGrinSquintTears 
} from '@fortawesome/free-solid-svg-icons'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Your useEffect logic here, if needed
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here, such as sending the form data
    console.log(formData);
  };

  return (
    <div className="contactbody">
      <section id="contact">
        <h1 className="section-header">Contact Us</h1>

        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ backgroundColor: "black", color: "white"}}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ backgroundColor: "black", color: "white"}}
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ backgroundColor: "black", color: "white"}}
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <FontAwesomeIcon icon={faMapMarker} />
                <span className="contact-text place">City, State</span>
              </li>

              <li className="list-item">
                <FontAwesomeIcon icon={faPhone} />
                <span className="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    (212) 555-2368
                  </a>
                </span>
              </li>

              <li className="list-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    hitmeup@gmail.com
                  </a>
                </span>
              </li>
            </ul>

            <hr />
            <ul className="social-media-list">
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faTrainSubway} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faFaceFrown} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faExchange} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faFaceGrinSquintTears} />
                </a>
              </li>
            </ul>
            <hr />

            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
}
