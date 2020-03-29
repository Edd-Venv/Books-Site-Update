import React, { useContext, useState } from "react";
import { UserContext } from "../../App.js";

function ChangeUserPwd(props) {
  const [user] = useContext(UserContext);
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const result = await (
      await fetch("http://localhost:4000/settings/changePassword", {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="old password" />
        <input
          value={oldPwd}
          placeholder="Old Password"
          type="password"
          onChange={handleInput}
          name="old password"
        />
      </div>
      <div>
        <label htmlFor="new password" />
        <input
          name="new password"
          value={newPwd}
          placeholder="New Password"
          type="password"
          onChange={handleInput}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ChangeUserPwd;
