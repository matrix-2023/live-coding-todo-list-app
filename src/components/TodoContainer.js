import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

function TodoContainer() {
  const todoList = [
    {
      id: uuidv4(),
      title: "Setup development environment",
      tag: "Home",
      user: "Rosa",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Develop website and add content",
      tag: "Important",
      user: "My self",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Deploy to live server",
      tag: "Work",
      user: "Jack",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(todoList);
  const [completedTaskList, setCompletedTaskList] = useState([]);

  const handleChange = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        setCompletedTaskList([...completedTaskList, todo]);
      }
      return todo;
    });
    setTodos(todos.filter((todo, i) => todo.id !== id));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title, tag, user) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      tag: tag,
      user: user,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
        completedTaskList={completedTaskList}
      />
    </div>
  );
}

export default TodoContainer;
