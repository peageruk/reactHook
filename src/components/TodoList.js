import React, { useState } from "react";
import _ from "lodash";
const TodoList = () => {
  const [todo, setToDo] = useState("");
  const [listToDo, setToDoList] = useState([
    { id: "todo1", todo: "test" },
    { id: "todo2", todo: "run" },
    { id: "todo3", todo: "debug" },
  ]);
  const handleOnClickBtn = () => {
    let toDo = { id: `todo3${getRndInteger(4, 999)}`, todo: todo };
    let newToDO = [...listToDo, toDo];
    !todo ? alert("missing todo") : setToDoList(newToDO);
    setToDo("");
  };
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const onClickDelete = (id) => {
    let newListToDo = _.clone(listToDo);
    newListToDo = newListToDo.filter((item) => item.id !== id);
    setToDoList(newListToDo);
  };
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
      <div>list to do:</div>
      {listToDo.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              onClickDelete(item.id);
            }}
          >
            {item.todo}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
