import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title, tag, user } = props.todo;

  console.log("todo", props.todo);
  return (
    <li className="todo-item">
      <div className="checked-tag">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <span
          className={`${tag.toLowerCase()} tag-item`}
          style={completed ? completedStyle : null}
        >
          {tag}
        </span>
      </div>
      <div className="todo-heading">
        <h3 style={completed ? completedStyle : null}>{title}</h3>
      </div>
      <div className="assign-btn">
        <p style={completed ? completedStyle : null}>
          <strong>Assign to:</strong> {user}{" "}
        </p>
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
