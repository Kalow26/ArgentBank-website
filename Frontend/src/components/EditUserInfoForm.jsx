import React, { useEffect } from "react";
import { getStorage } from "../utils/getStorage";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../app/store/features/userSlice";
import { useState } from "react";

const EditUserInfoForm = ({ setEdition, lastName, firstName }) => {
  const statusMessage = useSelector((state) => state.user.statusMessage);
  const [newUserName, setNewUserName] = useState("");
  const [showSuccessMessage, setShowSuccesMessage] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const token = storage.getItem("token");
    dispatch(updateUserName({ newUserName, token }));
  };

  return (
    <form className="user-edition__container" onSubmit={handleSubmit}>
      <div className="user-edition__input-wrapper">
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          id="userName"
          placeholder="Enter a new User Name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>
      <div className="user-edition__input-wrapper">
        <label htmlFor="firstName">First name</label>
        <input type="text" id="FirstName" placeholder={firstName} disabled />
      </div>
      <div className="user-edition__input-wrapper">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" placeholder={lastName} disabled />
      </div>
      <div className="user-edition__input-wrapper">
        <button className="sign-in-button">save</button>
        <button className="sign-in-button" onClick={() => setEdition(false)}>
          cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserInfoForm;
