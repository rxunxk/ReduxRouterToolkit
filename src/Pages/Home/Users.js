import React from "react";
import "../../Styles/Product.css";
import { useSelector } from "react-redux";
import { getApiSelectors } from "../../redux/slices/callAPISlice";

const Users = () => {
  let userItems = [];
  const state = useSelector(getApiSelectors);

  if (Object.keys(state.apiRAW).length === 0 && !state.isLoading) {
    return <h4>NO Users available.</h4>;
  }

  if (state.isLoading) {
    return (
      <>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  }

  userItems = state.apiRAW.users.map((user) => {
    return (
      <div className="product-container">
        <p>{user.firstName}</p>
      </div>
    );
  });
  return <>{userItems}</>;
};

export default Users;
