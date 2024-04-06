import "./login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const loginData = {
        username: username,
        password: password,
    }
    console.log(loginData)
    sessionStorage.setItem("user_details", JSON.stringify(loginData))
    navigate('/profile')
  }
  
  return (
    <div>
      <form>
        <div className="field-group">
          <span aria-hidden="true">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <div className="wthree-field">
            <input
              name="text1"
              id="text1"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
        </div>
        <div className="field-group">
          <span aria-hidden="true">
            <FontAwesomeIcon icon={faLock} />
          </span>
          <div className="wthree-field">
            <input
              name="password"
              id="myInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="wthree-field">
         <button onClick={handleLogin} type="submit" className="btn">
            Get Started
          </button>
        </div>
        <ul className="list-login">
          <li className="switch-agileits">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              keep Logged in
            </label>
          </li>
          <li>
            <a href="#" className="text-right">
              forgot password?
            </a>
          </li>
          <li className="clearfix"></li>
        </ul>
        <ul className="list-login-bottom">
          <li className="">
            <a href="/register" className="">
              Create Account
            </a>
          </li>
          <li className="">
            <a href="#" className="text-right">
              Need Help?
            </a>
          </li>
        </ul>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
}
