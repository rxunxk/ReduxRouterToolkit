import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Shop from "./Shop";
import "../Styles/Navigation.css";
import { getItemSelectors } from "../redux/slices/cartSlice";

const Navigation = () => {
  const count = useSelector(getItemSelectors);

  return (
    <>
      <div className="nav-bar">
        <Link className="nav-text" to="/">
          Home
        </Link>
        <Link className="nav-text" to="/Shop">
          Shop
        </Link>
        <Link className="nav-text" to="/About">
          About
        </Link>
        <Link className="nav-text" to="/Contact">
          Contact
        </Link>
        <p className="nav-text">Cart: {count}</p>
        {/* <div className="nav-cart">Cart: {count}</div> */}
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Shop" element={<Shop />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default Navigation;
