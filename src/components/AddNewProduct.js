import React, { useState } from "react";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const handleOnClickBtn = () => {
    let object = {
      name,
      price,
      size,
      color,
    };
    // localStorage.setItem("productList", JSON.stringify(object));
    if (!name || !price || !size || !color) {
      alert("All fields are required");
      return;
    }
    let productList = localStorage.getItem("productList"); //string
    if (productList) {
      let arr = JSON.parse(productList); // object
      arr.push(object);
      localStorage.setItem("productList", JSON.stringify(arr));
    } else {
      localStorage.setItem("productList", JSON.stringify([object]));
    }
    setName("");
    setPrice("");
    setSize("");
    setColor("");
  };
  const [isShow, setItShow] = useState("true");
  return (
    <div>
      {isShow ? (
        <>
          <fieldset>
            <legend>AddNewProduct</legend>
            <div className="input-product">
              <label> Name: </label>
              <input
                value={name}
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="input-product">
              <label> Price: </label>
              <input
                value={price}
                type="text"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div className="input-product">
              <label> Size: </label>
              <input
                value={size}
                type="text"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div className="input-product">
              <label> Color: </label>
              <input
                value={color}
                type="text"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div>
              <button
                onClick={() => {
                  handleOnClickBtn();
                }}
              >
                Add new
              </button>
            </div>
          </fieldset>

          <div
            onClick={() => {
              setItShow(!isShow);
            }}
          >
            Hide this form
          </div>
        </>
      ) : (
        <div
          onClick={() => {
            setItShow(!isShow);
          }}
        >
          Show form
        </div>
      )}
      <div>
        List product
        <div>{localStorage.getItem("productList")}</div>
      </div>
    </div>
  );
};

export default AddNewProduct;
