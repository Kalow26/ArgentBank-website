export const getStorage = () => {
  if (sessionStorage.length === 0) {
    return localStorage;
  } else {
    return sessionStorage;
  }
};
