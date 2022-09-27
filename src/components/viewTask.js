import React from "react";
import { BsXLg } from "react-icons/bs";
import { ImBin } from "react-icons/im";

function ViewTask({ closeModal, data, remove }) {
  return (
    <div className="view-task">
      <div className="view-task-heading">
        <p>Tasks to be done</p>
        <BsXLg onClick={closeModal} />
      </div>
      {data.map((value, index) => {
        return (
          <div className="task" key={index} >
            <p>{value.text}</p>
            <p>{value.date}</p>
            <p>{value.time}</p>
            <ImBin onClick={() => remove(index)} />
          </div>
        );
      })}
    </div>
  );
}

export default ViewTask;
