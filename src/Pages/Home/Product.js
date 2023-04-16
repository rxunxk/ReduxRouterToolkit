import React from "react";
import "../../Styles/Product.css";
import { useSelector } from "react-redux";
import { getApiSelectors } from "../../redux/slices/callAPISlice";

const Product = () => {
  let productItems = [];
  const state = useSelector(getApiSelectors);

  if (Object.keys(state.apiRAW).length === 0 && !state.isLoading) {
    return <h4>NO Products available.</h4>;
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

  productItems = state.apiRAW.products.map((product) => {
    return (
      <div className="product-container">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    );
  });
  return <>{productItems}</>;
};

export default Product;
