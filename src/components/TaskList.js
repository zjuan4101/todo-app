import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => (
  <ul className="task-list">
    {tasks.map(task => (
      <li key={task.id} className="task-item">
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
        </span>
        <button onClick={() => toggleComplete(task.id)}>Complete</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;