import React from "react";

function Home({ handleVisibility }) {
  return (
    <div className="home">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/todo-list-4202321-3480623.png"
        alt="todo"
      />
      <div>
        <p>Add First Task</p>
        {/* <div className="arrow"></div> */}
        <button onClick={handleVisibility}>+</button>
      </div>
    </div>
  );
}

export default Home;
