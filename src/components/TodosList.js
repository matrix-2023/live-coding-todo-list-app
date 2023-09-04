import React from "react";
import TodoItem from "./TodoItem";
import CompletedItem from "./CompletedItem";

function TodosList(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
        />
      ))}

      {props.completedTaskList.length > 0 && (
        <div className="completed-task">
          <h2>Completed Items</h2>
          {props.completedTaskList.map((completed) => (
            <CompletedItem
              key={completed.id}
              completedTaskList={completed}
              handleChangeProps={props.handleChangeProps}
              deleteTodoProps={props.deleteTodoProps}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodosList;
