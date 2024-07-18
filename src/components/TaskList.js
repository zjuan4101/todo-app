import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => (
  <div className="task-list-container">
    {tasks.length === 0 ? (
      <p>No tasks found. Add a new task above!</p>
    ) : (
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
    )}
  </div>
);

export default TaskList;
