import { useEffect } from "react";
import UserAccount from "../../components/UserAccount";
import { dataUserAccount } from "../../data/dataUserAcount";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { getStorage } from "../../utils/getStorage";
import { getUserProfile } from "../../app/store/features/userSlice";

const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const state = useSelector((state) => state.user);
  console.log(state);

  return (
    <section className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userInfo.firstName} {userInfo.lastName}
        </h1>
        <button className="edit-button">Edit Name</button>
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
