import React from "react";

const DisplayToDo = (props) => {
  //   const onClickDelete = (id) => {
  //     props.parentFunction(id);
  //   };
  // const onClickDelete = props.parentFunction;
  // const listToDo = props.parentData;
  const { onClickDelete, listToDo } = props;
  return (
    <div>
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

export default DisplayToDo;
