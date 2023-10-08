import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user || user.username === "" || user.password === "")
    return (
      <div className="text-white text-center text-2xl tracking-wider ">
        Please Login
      </div>
    );
  return (
    <div className="text-white text-center text-2xl tracking-wider ">
      Profile:{" "}
      <span className="capitalize text-purple-300">{user.username}</span>
    </div>
  );
};

export default Profile;
