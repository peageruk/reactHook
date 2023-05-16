import React from "react";

const AddToDo = (props) => {
  const { todo, setToDo, handleOnClickBtn } = props;
  return (
    <div>
      <label>Name </label>
      <input
        value={todo}
        type="text"
        onChange={(event) => {
          setToDo(event.target.value);
        }}
      />
      <button
        onClick={() => {
          handleOnClickBtn();
        }}
      >
        add
      </button>
    </div>
  );
};

export default AddToDo;
