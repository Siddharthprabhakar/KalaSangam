import { useEffect } from 'react';
import "./contactus.css";

export function CaseContact() {
  useEffect(() => {
    const handleInputChange = (e) => {
      const input = e.target;
      if (input.value) {
        input.classList.add('not-empty');
      } else {
        input.classList.remove('not-empty');
      }
    };

    const inputs = document.querySelectorAll('.js-input');
    inputs.forEach((input) => {
      input.addEventListener('keyup', handleInputChange);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('keyup', handleInputChange);
      });
    };
  }, []);

  return (
      <section className="get-in-touch">
        <h1 className="title">Get in touch</h1>
        <form className="contact-form contactrow">
          <div className="form-field col x-50">
            <input
              id="name"
              className="input-text js-input"
              type="text"
              required
            />
            <label className="label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="form-field col x-50">
            <input
              id="email"
              className="input-text js-input"
              type="email"
              required
            />
            <label className="label" htmlFor="email">
              E-mail
            </label>
          </div>
          <div className="form-field col x-100">
            <input
              id="message"
              className="input-text js-input"
              type="text"
              required
            />
            <label className="label" htmlFor="message">
              Message
            </label>
          </div>
          <div className="form-field col x-100 align-center">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </section>
  );
}
