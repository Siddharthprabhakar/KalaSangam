import { useState } from 'react';
import './Login/login.css'
import { RegisterForm } from './Register/RegisterForm';
import { Login } from './Login/Login';

export function LoginForm() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsRegistering(true);
  };

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsRegistering(false);
  };

  return (
    <div className='loginbody'>
      <section className="main">
        <div className="overlay">
          <div className="layer">
            <div className="bottom-grid">
              <div className="logreg">
                <h1>
                  <a href="/">
                    कला Sangam
                  </a>
                </h1>
              </div>
              <div className="links">
                <ul className="links-unordered-list">
                  <li className={!isRegistering ? 'active' : ''}>
                    <a onClick={handleLoginClick} className="">
                      Login
                    </a>
                  </li>
                  <li className={isRegistering ? 'active' : ''}>
                    <a onClick={handleRegisterClick} className="">
                      Register
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-w3ls">
              <div className="login-text">
                {isRegistering ? 'Register' : 'Login'}
              </div>
              <div className="content-bottom">
                {isRegistering ? (
                  <RegisterForm />
                ) : (
                  <Login />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
