import React, { useState } from "react";
import Task from "./Task";

const SearchBar = () => {
  const [value, changeValue] = useState("");
  const [todo, changeTodo] = useState([]);

  const handleInput = (event) => {
    changeValue(event.target.value);
  };

  const handleClick = () => {
    if(value === '') return;
    changeTodo((todo) => {
      return [...todo, value];
    });
    changeValue("");
  };

  const handleEnter = event => {
    if(event.keyCode === 13) {
      handleClick()
    }
  }

  const deleteItem = (id) => {
    changeTodo((todo) => {
      return  todo.filter((value, index) => {
        return index !== id;
      });
    });
  };



  return (
    <>
      <div className="searchArea">
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          value={value}
          placeholder="Search Text"
          autoComplete="off"
          onChange={handleInput}
          onKeyUp={handleEnter}
        />
        <button className="button1" onClick={handleClick}>
          Add Task
        </button>
      </div>
      <div className="task">
        {todo.map((value, index) => {
          return (
            <Task key={index} id={index} value={value} delete={deleteItem} />
          );
        })}
      </div>
    </>
  );
};

export default SearchBar;


