import React, { useContext } from "react";
import { UserContext } from "../../App.js";
import { GoTrashcan } from "react-icons/go";
import Navigation from "../Navigation/Navigation.js";
import ChangeUserName from "./ChangeUserName.js";
import ChangeUserPwd from "./ChangeUserPwd.js";

function Settings(props) {
  const [user] = useContext(UserContext);

  const deleteUser = async () => {
    const result = await (
      await fetch("http://18.222.115.53:4000/deleteUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accesstoken}`
        }
      })
    ).json();

    if (!result.error) {
      console.log(result.message);
    } else {
      console.log(result.error);
    }

    props.logOutCallback();
  };
  const style = {
    textAlign: "center"
  };
  return (
    <React.Fragment>
      <Navigation />
      <h3 style={style}>Change Name</h3>
      <ChangeUserName logOutCallback={props.logOutCallback} />
      <h3 style={style}>Change Password</h3>
      <ChangeUserPwd logOutCallback={props.logOutCallback} />
      <h3>DELETE Profile</h3>
      <button className="btn btn-primary" onClick={deleteUser}>
        DELETE USER
        <GoTrashcan />
      </button>
    </React.Fragment>
  );
}

export default Settings;
