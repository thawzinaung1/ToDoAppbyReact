import React from "react";
import Todo from "./Todo";
import { useState, createRef } from "react";

const UI = props => {
  const d = [
    {
      id: 1,
      name: "Walking"
    },
    {
      id: 2,
      name: "Cooking"
    },
    {
      id: 3,
      name: "Reading"
    }
  ];

  const [data, setData] = useState(d);

  let nameRef = createRef();
  function newData() {
    let id = data.length + 1;
    var name = nameRef.current.value;
    setData([...data, { id, name }]);
  }
  return (
    <div className="ui">
      <input type="text" ref={nameRef} />
      <button onClick={newData}>New</button>
      <Todo todo={data} />
    </div>
  );
};

export default UI;
