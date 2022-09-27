import React, { useState } from "react";
import DateComp from "./Date";

function Form({
  startDate,
  onChange,
  startTime,
  setStartTime,
  handleTask,
  value,
  handleInputChange,
}) {
  const [alert, setAlert] = useState(false);
  const handleAlert = () => {
    if (!value) {
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      <div className="form">
        <p>What is to be done?</p>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter Task Here"
          autoFocus
        />
        <p>Due date</p>
        <DateComp
          startDate={startDate}
          onChange={onChange}
          startTime={startTime}
          setStartTime={setStartTime}
          handleTask={handleTask}
          handleAlert={handleAlert}
        />
      </div>
      {alert ? (
        <div className="alert">
          <div>
            <p>Task Added !</p>
            <button onClick={() => setAlert(false)}>OK</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Form;
