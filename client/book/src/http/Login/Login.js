import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";
import { UserContext } from "../../App.js";
import Navigation from "../Navigation/Navigation.js";

const Login = props => {
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

  const handleChange = e => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const { displayLogin } = props;

  return (
    <React.Fragment>
      <Navigation />
      <div className={displayLogin}>
        <div className="login-wrapper">
          <form onSubmit={handleSubmit}>
            <div>Login</div>
            <div className="login-input">
              <input
                value={name}
                onChange={handleChange.bind(this)}
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
      </div>
    </React.Fragment>
  );
};

export default React.memo(Login);
