import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Home from "./Home";
import ViewTask from "./viewTask";

/*
startDate = date info
startTime = time
task = array containing all the tasks
visiiblity = when true renders the form
modal=the task page(open/close toggle)
*/

function Body() {
  let [startDate, onChange] = useState(new Date());
  let [startTime, setStartTime] = useState("23:59");

  let [inputValue, changeInputValue] = useState('')

  const handleInputChange = e => {
    changeInputValue(e.target.value)
  }

  const [task, setTask] = useState([]);
  const handleTask = () => {
    if(!inputValue) {
      alert('Name cannot be empty')
    }
    else {

      setTask((task) => {
        return [...task, {text:inputValue, date: startDate.toDateString(), time: startTime }];
      });
      changeInputValue('')
    }
  };

  const remove = (id) => {
    let filteredTask = task.filter((value, index) => {
      if (id !== index) {
        return value;
      }
    });
    setTask(filteredTask);
  };

  const [visibility, setVisibility] = useState(false);
  const handleVisibility = () => {
    setVisibility(true);
  };

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmission = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <Header handleModal={handleModal} />
      <Home handleVisibility={handleVisibility} />
      {visibility ? (
        <Form
          startDate={startDate}
          onChange={onChange}
          startTime={startTime}
          setStartTime={setStartTime}
          handleTask={handleTask}
          value={inputValue}
          handleInputChange={handleInputChange}
        />
      ) : null}
      {modal ? (
        <ViewTask closeModal={closeModal} data={task} remove={remove} />
      ) : null}
    </div>
  );
}

export default Body;
