import React from "react";
import "./Auth.css";
import icon from "../../assets/loginIcon.png";
import { useState } from "react";
import AboutAuth from "./AboutAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup, login } from "../../actions/auth.js";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-contanier-2">
        {!isSignup && (
          <img src={icon} alt="stack overflow" className="login-logo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="name"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="Password">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h4>Password</h4>
              {!isSignup && (
                <p  style={{ color: "#007ac6", fontSize: "11px" }}>
                  forget password?
                </p>
              )}
            </div>
            <input
              type="Password"
              name="Password"
              id="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "11px" }}>
                Passwords must contain at least eight characters,
                <br></br> including at least 1 letter and 1 number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "11px" }}>
                Opt-in to receive occasional product updates,
                <br />
                user research invitations, company announcements, and digests.
              </p>
            </label>
          )}
          <button type="Submit" className="auth-btn">
            {" "}
            {isSignup ? "Sign up" : "Log in"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "10px" }}>
              By clicking “Sign up”, you agree to our{" "}
              <span style={{ color: "#007ac6" }}>
                {" "}
                terms of <br />
                service
              </span>
              , <span style={{ color: "#007ac6" }}>
                privacy policy
              </span> and{" "}
              <span style={{ color: "#007ac6" }}>cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? "already have an account ?" : "Don't have an account ?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            
            {isSignup ? "Log in" : "Sign up"}
          </button>
        
        </p>
      </div>
    </section>
  );
};

export default Auth;