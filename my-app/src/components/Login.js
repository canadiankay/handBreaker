import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./login.css"

const Login = ({ auth, toggleLoggedIn, setUserInfo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginHandler = async () => {
    setError("");

    try {
      const authResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // store token in localstorage
      localStorage.setItem("accessToken", authResponse.user.accessToken);
      setUserInfo(authResponse.user.reloadUserInfo);
      toggleLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.log(error.toString());
      const errorMessage = error.toString();

      if (
        errorMessage.includes("auth/wrong-password") ||
        errorMessage.includes("user-not-found")
      ) {
        setError("Wrong email or password");
      }
    }
  };

  return (
    <div className="login-page">
      <div class="login-box">
        <form>
        <span></span>
        <h2>Login</h2>
          
          <span className="login-error">{error}</span>
          <div className="user-box">
            <input
              type="text"
              // placeholder="Please enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name=""
              required=""
            />
            <label>Email:</label>
          </div>

          <div className="user-box">
            <input
              type="password"
              // placeholder="Please enter a password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name=""
              required=""
            />
            <label>Password:</label>
          </div>

          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button onClick={loginHandler} type="button" >SUBMIT</button>
          </a>


          
        </form>
    </div>
    </div>
  );
};

export default Login;