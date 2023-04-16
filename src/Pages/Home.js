import React from "react";
import "../Styles/Home.css";
import { useSelector, useDispatch } from "react-redux";
import { callAPI } from "../redux/slices/callAPISlice";
import { setTitle, getTitleSelectors } from "../redux/slices/titleSlice";
import Product from "./Product";

const Home = () => {
  const title = useSelector(getTitleSelectors);
  const dispatch = useDispatch();

  //functions
  const getProducts = () => {
    dispatch(setTitle("Products"));
    dispatch(callAPI("products"));
  };

  const getTodos = () => {
    dispatch(setTitle("Todos"));
    dispatch(callAPI("todos"));
  };

  const getUsers = () => {
    dispatch(setTitle("Users"));
    dispatch(callAPI("users"));
  };

  return (
    <>
      <h1> Welcome to Home page</h1>
      <div className="btn-box">
        <button onClick={getProducts}>Products</button>
        <button onClick={getTodos}>Todos</button>
        <button onClick={getUsers}>Users</button>
      </div>
      <div className="data-container">
        <h1>{title}</h1>
        <Product />
      </div>
    </>
  );
};

export default Home;
