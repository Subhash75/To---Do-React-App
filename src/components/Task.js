const Task = (props) => {
  return (
    <>
      <div>
        <p>{props.value}</p>
        <button className="btn1" onClick={() => props.delete(props.id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Task;
