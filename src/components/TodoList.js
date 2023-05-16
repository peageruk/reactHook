import React, { useState } from "react";
import _ from "lodash";
const TodoList = () => {
  const [todo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([
    { id: "todo1", todo: "test" },
    { id: "todo2", todo: "run" },
    { id: "todo3", todo: "debug" },
  ]);
  const handleOnClickBtn = () => {
    let toDo = { id: `todo3${getRndInteger(4, 999)}`, todo: todo };
    let newToDO = [...toDoList, toDo];
    setToDoList(newToDO);
    console.log(">>> on click", todo);
  };
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const onClickDelete = (id) => {
    let newToDoList = _.clone(toDoList);
    newToDoList = newToDoList.filter((item) => item.id !== id);
    setToDoList(newToDoList);
  };
  return (
    <div>
      <label>Name </label>
      <input
        value={todo}
        type="text"
        onChange={(event) => {
          setToDo(event.target.value);
          //   console.log(">>> check event : ", event);
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
      {toDoList.map((item) => {
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
