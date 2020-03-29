import React, { useState } from "react";
import { navigate } from "@reach/router";
import Navigation from "../Navigation/Navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await (
      await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          person_name: name,
          password: password
        })
      })
    ).json();
    if (!result.error) {
      console.log(result.message);
      navigate("/");
    } else {
      console.log(result.error);
    }
  };

  const handleChange = e => {
    if (e.currentTarget.name === "name") {
      setName(e.currentTarget.value.toUpperCase());
    } else {
      setPassword(e.currentTarget.value);
    }
  };

  return (
    <React.Fragment>
      <Navigation displayLogin={"dontDisplayLoginForm"} />
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <div>Register</div>
          <div className="login-input">
            <input
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Password"
              required
            />
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
