import React from "react";
import ShowToDos from "./ShowToDos";

const Todo = props => {
  const show = props.todo.map(item => <ShowToDos data={item} />);

  return <div>{show}</div>;
};

export default Todo;
