export const getTokenFromStorage = () => {
  const tokenInSessionStorage = sessionStorage.getItem("token");
  const tokenInLocalStorage = localStorage.getItem("token");

  if (tokenInLocalStorage) {
    console.log(tokenInLocalStorage);
    return tokenInLocalStorage;
  } else if (tokenInSessionStorage) {
    console.log(tokenInSessionStorage);
    return tokenInSessionStorage;
  } else {
    return null;
  }
};
