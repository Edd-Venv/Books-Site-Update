import React, { useState, useContext, useEffect } from "react";
import { navigate } from "@reach/router";
import { UserContext } from "../App";

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await (
      await fetch("http://localhost:4000/login", {
        method: "POST",
        credentials: "include", // Needed to include the cookie
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          person_name: name,
          password: password
        })
      })
    ).json();

    if (result.accesstoken) {
      setUser({
        accesstoken: result.accesstoken
      });
      navigate("/");
    } else {
      console.log(result.error);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleChange = e => {
    if (e.currentTarget.name === "name") {
      setName(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <div>Login</div>
        <div className="login-input">
          <input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
