import React from "react";
import Navbar from "../components/Navbar";
import CardLogin from "../components/CardLogin";
import Alert from "../components/Alert";


const ProfileContainer = () => {
  return (
    <>
      <Navbar home="Home" profile="Profile" logout="logout" />
      <div className="d-flex flex-column justify-content-center align-items-center pt-5">
        <Alert />
        <CardLogin />
      </div>
    </>
  );
};

export default ProfileContainer;