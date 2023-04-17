import React from "react";
import "../../Styles/Product.css";
import { useSelector } from "react-redux";
import { getApiSelectors } from "../../redux/slices/callAPISlice";

const Todos = () => {
  let todoItems = [];
  const state = useSelector(getApiSelectors);

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

  if (Object.keys(state.apiRAW).length === 0 && !state.isLoading) {
    return <h4>NO Tasks available.</h4>;
  } else if (Object.keys(state.apiRAW)[0] === "todos") {
    todoItems = state.apiRAW.todos.map((task) => {
      return (
        <div className="product-container" key={task.id}>
          <p>{task.todo}</p>
        </div>
      );
    });
    return <>{todoItems}</>;
  }
};

export default Todos;
