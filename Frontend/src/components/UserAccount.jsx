/* eslint-disable react/prop-types */
const UserAccount = ({ title, amount, amountdesc }) => {
  return (
    <div className="account-content-wrapper">
      <h3 className="account-title">{title}</h3>
      <p className="account-amount">{amount}</p>
      <p className="account-amount-description">{amountdesc}</p>
    </div>
  );
};

export default UserAccount;
