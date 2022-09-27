import React, { useState } from "react";
import DatePicker from "react-date-picker";

function DateComp({
  startDate,
  onChange,
  startTime,
  setStartTime,
  handleTask,
  handleAlert
}) {
  let hours = startDate.getHours();
  if (hours.toString().length === 1) {
    hours = "0" + hours;
  }
  let minutes = startDate.getMinutes();
  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }
  let seconds = startDate.getSeconds();
  if (seconds.toString().length === 1) {
    seconds = "0" + seconds;
  }
  let x = hours + ":" + minutes + ":" + seconds;
  const timeCheck = (event) => {
    setStartTime(event.target.value);

    if (new Date().toDateString() === startDate.toDateString()) {
      let x = event.target.value.substring(0, 2);
      if (x < new Date().getHours()) {
        event.target.style.color = "red";
        setTimeError(true);
      } else {
        event.target.style.color = "black";
        setTimeError(false);
      }
    } else {
      event.target.style.color = "black";
      setTimeError(false);
    }
  };

  const [timeError, setTimeError] = useState(false);
  return (
    <>
      <DatePicker
        className="fun"
        value={startDate}
        onChange={onChange}
        format="dd/MM/yyyy"
        clearIcon={null}
        required
      />
      <input type="time" value={startTime} min="21:00" onChange={timeCheck} />
      {timeError ? <span className="error-msg">Time cannot be less than current time</span> : null}

      <button
        className="add-task"
        onClick={() => {
          handleTask();
          handleAlert();
        }}
      >
        Add Task
      </button>
    </>
  );
}

export default DateComp;
