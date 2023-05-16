import React, { useState } from "react";
import _ from "lodash";
import AddToDo from "./AddToDo";
import DisplayToDo from "./DisplayToDo";
const Home = () => {
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
      <AddToDo
        todo={todo}
        setToDo={setToDo}
        handleOnClickBtn={handleOnClickBtn}
      />

      <DisplayToDo listToDo={listToDo} onClickDelete={onClickDelete} />
    </div>
  );
};

export default Home;
