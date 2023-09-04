import React, { useState } from "react";

function InputTodo(props) {
  const [title, setTitle] = useState("");
  const [selectedTagValue, setSelectedTagValue] = useState("");
  const [selectedUserValue, setSelectedUserValue] = useState("My self");

  const tagOptions = [
    { value: "Home", label: "Home" },
    { value: "Work", label: "Work" },
    { value: "Important", label: "Important" },
    { value: "Morning", label: "Morning" },
  ];

  const assignUsers = [
    { value: "My self", label: "My self" },
    { value: "Jack", label: "Jack" },
    { value: "John", label: "John" },
    { value: "Rosa", label: "Rosa" },
  ];

  const handleSelectTagChange = (e) => {
    setSelectedTagValue(e.target.value);
  };

  const handleSelectUserChange = (e) => {
    setSelectedUserValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(title, selectedTagValue, selectedUserValue);
    setTitle("");
    setSelectedTagValue("");
    setSelectedUserValue("My self");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <select
        name="tags"
        value={selectedTagValue}
        className="select-input"
        onChange={handleSelectTagChange}
      >
        <option value="">Select Tags</option>
        {tagOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={handleChange}
      />
      <select
        name="user_assign"
        value={selectedUserValue}
        className="select-input"
        onChange={handleSelectUserChange}
      >
        {assignUsers.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="submit"
        disabled={title && selectedTagValue ? false : true}
        className="input-submit"
        value="Submit"
      />
    </form>
  );
}

export default InputTodo;
