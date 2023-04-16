import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  getItemSelectors,
  removeItem,
} from "../redux/slices/cartSlice";

const Shop = () => {
  const count = useSelector(getItemSelectors);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome to the Shop!</h1>
      <div className="shop-box">
        <div className="fruit">
          <p style={{ marginRight: "20px" }}>Add to Cart: </p>
          <button
            onClick={() => {
              if (count > 0) {
                dispatch(removeItem(1));
              }
            }}
          >
            -
          </button>
          <p style={{ margin: "0px 10px" }}>{count}</p>
          <button
            onClick={() => {
              dispatch(addItem(1));
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
