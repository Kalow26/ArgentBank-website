import UserAccount from "../../components/UserAccount";
import { dataUserAccount } from "../../data/dataUserAcount";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  return (
    <section className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
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
