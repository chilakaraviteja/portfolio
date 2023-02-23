import React, { useState } from "react";
import "./SignInForm.css";

const SignInForm = () => {
  const [users, setUsers] = useState({ userName: "", password: "" });
  const [userInfo, setUserInfo] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo([...userInfo, users]);
    setUsers({ email: "", password: "" });
  };
  return (
    <>
      <div className="container">
        {/* <div className="namess">
          {userInfo.map((user, index) => (
            <li className="label" key={index}>
              {" "}
              Welcome {user.email}
            </li>
          ))}
        </div> */}
        <form onSubmit={handleSubmit}>
          <label className="label">Email</label>
          <input
            className="input-box"
            name="email"
            type="email"
            value={users.email}
            placeholder="yourname@mail.com"
            onChange={handleChange}
            required
          />
          <br />
          <label className="label">Password</label>
          <input
            className="input-box"
            type="password"
            name="password"
            value={users.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button>Login</button>
        </form>
        <hr />
      </div>
    </>
  );
};

export default SignInForm;
