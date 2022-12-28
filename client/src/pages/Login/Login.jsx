import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Login.scss";

const Login = () => {
  const values = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(values);

  const handleChange = (e) => {
    const loginValues = { ...data };
    const value = e.target.value;
    const name = e.target.name;

    loginValues[name] = value;
    setData(loginValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dispatch, { user, password });
  };

  //   const dispatch = useDispatch();
  //   const { isFecthing, error } = useSelector((state) => state.user);
  return (
    <div className="login-container">
      <div className="login">
        <h3>LOGIN</h3>
        <div className="email">
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div className="password">
          <label htmlFor="Password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="login-button">
          <button onClick={handleSubmit}>SIGN IN</button>
          {/* {error && <h4>Somewthing went wrong</h4>} */}
          <p>Forget Password?</p>
        </div>
        <div className="account">
          <h3>
            Need an account ?
            <Link to="/register">
              <a href="LOGIN">Register here</a>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
