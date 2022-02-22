import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

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
    <form>
      <span className="login-error">{error}</span>
      <div>
        Email:
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        Password:
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button onClick={loginHandler} type="button">
        Login
      </button>
    </form>
  );
};

export default Login;