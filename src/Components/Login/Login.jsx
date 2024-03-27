import React, { useState } from "react";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import "./design.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allValue, setAllValue] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();
    const newValue = { email, password };
    setAllValue([...allValue, newValue]);

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>
              Enter your email and password below to log in to your account and
              use the benefits of our website.
            </p>
            <form onSubmit={formSubmit}>
              <div className="input">
                <input
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="E-mail"
                />
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
              </div>
              <div className="flex_space">
                <div className="flex">
                  <input type="checkbox" name="" id="" />
                  <label>Remember me</label>
                </div>
                <div className="flex">
                  <span>I forgot my password</span>
                </div>
              </div>
              <button type="submit" className="primary-btn">
                Sign In
              </button>
              <p>
                Don't have account? <Link to="/register">SignUp</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="show-data">
        {allValue.map((currentValue) => {
          const { email,  password } =
            currentValue;
          return (
            <div className="sign-box">
              <h1>Login Successfully</h1>              
              <h3>
                E-mail : <p>{email}</p>
              </h3>
              
              <h3>
                Password : <p>{password}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Login;
