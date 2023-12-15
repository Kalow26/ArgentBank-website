export const handleUpdateUserNameRejected = (state, action) => {
  state.statusMessage = action.payload.message;
};

export const handleUpdateUserNameFullfilled = (state, action) => {
  state.userInfo = action.payload.body;
  state.statusMessage = action.payload.message;
};

export const handleUpdateUserNamePending = (state) => {
  state.statusMessage = "Sending request...";
};

export const handleGetUserProfileFullfilled = (state, action) => {
  state.isLogged = true;
  state.userInfo = action.payload.body;
};

export const handleFetchUserByEmailRejected = (state, action) => {
  state.statusMessage = action.payload.message;
};

export const handleFetchUserByEmailFullfilled = (state, action) => {
  const storage = action.meta.arg.rememberMe ? localStorage : sessionStorage;
  state.isLogged = true;
  storage.setItem("token", action.payload.body.token);
  state.statusMessage = action.payload.message;
};

export const handleFetchUserByEmailPending = (state) => {
  state.statusMessage = "Logging in...";
};
