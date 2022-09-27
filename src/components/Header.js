import React from "react";
import { FaCheck, FaSistrix } from "react-icons/fa";

function Header({ handleModal }) {
  return (
    <div className="header">
      <p>
        <FaCheck />
        <span>Task</span>
      </p>
      <p onClick={handleModal}>View Tasks</p>
    </div>
  );
}

export default Header;
