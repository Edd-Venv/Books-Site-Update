import React, { useContext, useState } from "react";
import { UserContext } from "../../App.js";

function ChangeUserPwd(props) {
  const [user] = useContext(UserContext);
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const result = await (
      await fetch("http://18.222.115.53:4000/settings/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accesstoken}`
        },
        body: JSON.stringify({
          old_password: oldPwd,
          new_password: newPwd
        })
      })
    ).json();
    if (!result.error) {
      console.log(result.message);
    } else {
      console.log(result.error);
    }

    props.logOutCallback();
  };

  const handleInput = event => {
    if (event.target.name === "old password") {
      setOldPwd(event.target.value);
    } else setNewPwd(event.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "30%", margin: "0 auto", font: "2rem" }}
    >
      <div className="form-group">
        <label htmlFor="old password">OLD PASSWORD</label>
        <input
          className="form-control"
          value={oldPwd}
          placeholder="Old Password"
          type="password"
          onChange={handleInput}
          name="old password"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="new password">NEW PASSWORD</label>
        <input
          className="form-control"
          name="new password"
          value={newPwd}
          placeholder="New Password"
          type="password"
          onChange={handleInput}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ChangeUserPwd;
