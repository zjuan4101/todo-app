import React, { useState } from 'react';
import axios from '../axiosConfig'; // Import the configured Axios instance

const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newTask = {
      name: taskName,
      completed: false,
    };

    try {
      const response = await axios.post('/api/tasks/', newTask);
      const createdTask = response.data;
      addTask(createdTask);
      setTaskName('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
