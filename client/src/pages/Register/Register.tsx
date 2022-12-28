import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
const Register = () => {
  const values = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: "false",
  };

  const [data, setData] = useState(values);

  const handleChange = (event) => {
    const dataValues = { ...data };
    const value = event.target.value;
    const name = event.target.name;
    dataValues[name] = value;
    setData(dataValues);
  };

  const handleCheckBox = (event) => {
    const newValues = { ...data };
    newValues["acceptedTerms"] = event.target.checked;
    setData(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="register-container">
      <div className="register">
        <h2>REGISTER</h2>

        <div className="firstName">
          <label htmlFor="FirstName">FirstName</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="lastName">
          <label htmlFor="LastName">LastName</label>

          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label htmlFor="Email">Email</label>

          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <label htmlFor="Password">Password</label>

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className="confirmPassword">
          <label htmlFor="ConfirmPassword">Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="signup">
          <button onClick={handleSubmit}>SIGN UP</button>
        </div>
        <div className="terms-condition">
          <input
            type="checkbox"
            value="acceptedTerms"
            onChange={handleCheckBox}
          />
          <h4>I accepts the terms and condtion</h4>
        </div>
        <div className="already">
          <h4>
            Already a user?
            <Link to="/login">
              <a href="login">LOGIN</a>
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Register;
