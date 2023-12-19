import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./login.css";

const Login = ({ logvisibility, setLogin }) => {
  return (
    <div
      className="login-wrap"
      style={{ display: logvisibility ? "block" : "none" }}
    >
      <div className="login_container">
        <div className="login-icon">
          <p onClick={setLogin}>
            <IoCloseOutline size={20} />
          </p>
        </div>
        <div className="header">
          <h3>Login</h3>
        </div>
        <div className="login-form">
          <form>
            <div className="input_login1">
              <input type="text" placeholder="Email" />
            </div>
            <div className="input_login2">
              <input type="text" placeholder="Password" />
            </div>
            <div className="label-input">
              <label htmlFor="terms" className="checkbox-label">
                <input type="checkbox" id="terms" name="terms" />
                Remember me
              </label>

              <p>
                <a href="#">Forgot Password?</a>
              </p>
            </div>
          </form>
          <button className="btn_register">Register</button>
          <div className="register-account">
            <p>Don't have an account?</p>
            <h4>
              <a href="#">Register</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
