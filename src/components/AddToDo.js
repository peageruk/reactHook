import React from "react";

const AddToDo = (props) => {
  const { todo, setToDo, handleOnClickBtn } = props;
  return (
    <div>
      <label>Name </label>
      <input
        className="input-todo"
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
        Add to do
      </button>
    </div>
  );
};

export default AddToDo;
