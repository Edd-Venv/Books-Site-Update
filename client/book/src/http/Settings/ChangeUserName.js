import React, { useState, useContext } from "react";
import { UserContext } from "../../App.js";

function ChangeUserName(props) {
  const [user] = useContext(UserContext);
  const [oldName, setOldName] = useState("");
  const [newName, setNewName] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    const result = await (
      await fetch("http://localhost:4000/settings/changeName", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accesstoken}`
        },
        body: JSON.stringify({
          old_name: oldName,
          new_name: newName
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
    if (event.target.name === "old Name") {
      setOldName(event.target.value);
    } else setNewName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="old Name" />
        <input
          value={oldName}
          type="text/number"
          name="old Name"
          placeholder="Old Name"
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="new Name" />
        <input
          value={newName}
          type="text/number"
          name="new Name"
          placeholder="New Name"
          onChange={handleInput}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ChangeUserName;
