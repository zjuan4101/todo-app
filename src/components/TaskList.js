import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => (
  <div>
    {tasks.map(task => (
      <div key={task.id}>
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
        </span>
        <button onClick={() => toggleComplete(task.id)}>Complete</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default TaskList;