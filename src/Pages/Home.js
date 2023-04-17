import "../Styles/Home.css";
import { useSelector, useDispatch } from "react-redux";
import { callAPI } from "../redux/slices/callAPISlice";
import { setTitle, getTitleSelectors } from "../redux/slices/titleSlice";
import Product from "./Home/Product";
import Todos from "./Home/Todos";
import Users from "./Home/Users";
import { useEffect } from "react";

const Home = () => {
  let comp;
  const title = useSelector(getTitleSelectors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callAPI(title.toLowerCase()));
  }, [title]);

  if (title === "Products") {
    comp = <Product />;
  } else if (title === "Todos") {
    comp = <Todos />;
  } else {
    comp = <Users />;
  }

  //Click Handler function
  const clickHandler = (str) => {
    dispatch(setTitle(str));
  };

  return (
    <>
      <h1> Welcome to Home page</h1>
      <div className="btn-box">
        {/* Using the bind method here because we can pass arguments directly without having a performance problem */}
        <button onClick={clickHandler.bind(null, "Products")}>Products</button>
        <button onClick={clickHandler.bind(null, "Todos")}>Todos</button>
        <button onClick={clickHandler.bind(null, "Users")}>Users</button>
      </div>
      <div className="data-container">
        <h1>{title}</h1>
        {comp}
      </div>
    </>
  );
};

export default Home;
