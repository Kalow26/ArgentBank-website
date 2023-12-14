import { useState } from "react";
import UserAccount from "../../components/UserAccount";
import { dataUserAccount } from "../../data/dataUserAcount";
import "./profile.css";
import { useSelector } from "react-redux";
import EditUserInfoForm from "../../components/EditUserInfoForm";

const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [edition, setEdition] = useState(false);

  const handleEditUserInfo = () => {
    setEdition(true);
  };

  return (
    <section className="main bg-dark">
      <div className="header">
        {edition ? (
          <EditUserInfoForm
            setEdition={setEdition}
            userName={userInfo.userName}
            lastName={userInfo.lastName}
            firstName={userInfo.firstName}
          />
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {userInfo.firstName} {userInfo.lastName}
            </h1>

            <button
              className="edit-button"
              onClick={() => handleEditUserInfo()}
            >
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {dataUserAccount.map((account) => (
        <section className="account" key={account.id}>
          <UserAccount
            title={account.title}
            amount={account.amount}
            amountdesc={account.amountDesc}
          />
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Profile;
