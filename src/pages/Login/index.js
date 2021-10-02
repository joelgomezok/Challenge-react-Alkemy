import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.scss";

const Login = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
    } else if (!password) {
      setError("Please enter your password");
    } else {
      const token = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      if (token.data.includes("401")) {
        setError("You do not have permissions");
      } else {
        localStorage.setItem("token", token.data);
        history.push("/");
      }
    }
    resetEmail();
    resetPassword();
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email: challenge@alkemy.org" {...bindEmail}/>
        <input
          type="password"
          name="password"
          placeholder="Password: react"
          {...bindPassword}
        />
        {error ? <div className={styles.error}>{error}</div> : null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
