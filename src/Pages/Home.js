import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import { useSelector, useDispatch } from "react-redux";
import { callAPI } from "../redux/slices/callAPISlice";
import { setTitle, getTitleSelectors } from "../redux/slices/titleSlice";
import Product from "./Home/Product";
import Todos from "./Home/Todos";
import Users from "./Home/Users";

const Home = () => {
  let comp;
  const title = useSelector(getTitleSelectors);
  const dispatch = useDispatch();
  //const [comp, setComp] = useState(<Product />);

  if (title === "Products") {
    comp = <Product />;
  } else if (title === "Todos") {
    comp = <Todos />;
  } else {
    comp = <Users />;
  }

  //functions
  const getProducts = () => {
    //setComp(<Product />);
    dispatch(setTitle("Products"));
    dispatch(callAPI("products"));
  };

  const getTodos = () => {
    //setComp(<Todos />);
    dispatch(setTitle("Todos"));
    dispatch(callAPI("todos"));
  };

  const getUsers = () => {
    //setComp(<Users />);
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
        {comp}
      </div>
    </>
  );
};

export default Home;
