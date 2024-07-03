import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value || !category || !dueDate) return;
    addTask(value, category, dueDate);
    setValue('');
    setCategory('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={value}
        placeholder="Task"
        onChange={e => setValue(e.target.value)}
      />
      <input
        type="text"
        value={category}
        placeholder="Category"
        onChange={e => setCategory(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
