import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../Appwrite/auth";
import { logOut } from "../../Store/authSlice";
function LogOutBtn() {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    authService.logOut().then(() => {
      dispatch(logOut());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logOutHandler}
    >
      Logout
    </button>
  );
}

export default LogOutBtn;
