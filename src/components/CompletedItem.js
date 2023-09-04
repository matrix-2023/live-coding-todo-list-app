import React from "react";

function CompletedItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, title, tag, user } = props.completedTaskList;

  return (
    <li className="todo-item">
      <div className="checked-tag">
        <span className={`${tag.toLowerCase()} tag-item`}>{tag}</span>
      </div>
      <div className="todo-heading">
        <h3 style={completed ? completedStyle : null}>{title}</h3>
      </div>
      <div className="assign-btn">
        <p style={completed ? completedStyle : null}>
          <strong>Assign to:</strong> {user}
        </p>
      </div>
    </li>
  );
}

export default CompletedItem;
