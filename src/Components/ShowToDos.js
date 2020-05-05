import React from "react";

const ShowToDos = props => {
  let [option, setOption] = React.useState(false);

  return (
    <div>
      <ul className="list">
        <li
          key={props.data.id}
          style={{
            display: "inline",
            textDecoration: option ? "line-through" : "none"
          }}
        >
          {props.data.name}
        </li>
        <button className="cbutton" onClick={() => setOption(!option)}>
          {option ? "UnComplete" : "Complete"}
        </button>
      </ul>
    </div>
  );
};

export default ShowToDos;
