import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

//      fetch(
//         `http://localhost:3001/api/v1/user/login`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json;charset=utf-8" },
//           body: JSON.stringify(action),
//         }
//       );
//       const response = await userInfo.json();
//       if (response) {
//         console.log(response);
//         state.isLogged(true);
//       }
//     } catch (error) {
//       console.error(error);

//   };
