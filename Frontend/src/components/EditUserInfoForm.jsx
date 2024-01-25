/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleStatutMessage } from "../app/store/features/userSlice";
import { updateUserName } from "../app/store/userThunks/userThunks";
import { getStorage } from "../utils/getStorage";

const EditUserInfoForm = ({ setEdition, userName, lastName, firstName }) => {
  const statusMessage = useSelector((state) => state.user.statusMessage);
  const [newUserName, setNewUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const token = storage.getItem("token");
    if (newUserName !== userName && newUserName !== "") {
      setErrorMessage("");
      dispatch(updateUserName({ newUserName, token }));
    } else {
      setErrorMessage("Please enter a valid new user name");
    }
  };

  useEffect(() => {
    if (statusMessage) {
      setTimeout(() => {
        dispatch(handleStatutMessage());
        setEdition(false);
      }, 2000);
    }
  }, [dispatch, statusMessage, setEdition]);

  return (
    <form className="user-edition__container" onSubmit={handleSubmit}>
      <div className="user-edition__input-wrapper">
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          id="userName"
          placeholder={userName}
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {statusMessage}
    </form>
  );
};

export default EditUserInfoForm;
