import React from 'react';

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div className="task" style={{ textDecoration: task.isCompleted ? 'line-through' : '' }}>
      <div>
        <span className="task-text">{task.text}</span>
        <span className="task-category">{task.category}</span>
        <span className="task-due">{task.dueDate}</span>
      </div>
      <div>
        <button className="complete-btn" onClick={() => completeTask(index)}>Complete</button>
        <button className="remove-btn" onClick={() => removeTask(index)}>Remove</button>
      </div>
    </div>
  );
}

export default Task;
