import React, { useState, useEffect } from 'react';
import axios from './axiosConfig'; // Import the configured Axios instance
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks/');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = (task) => {
    // Update state with the new task
    setTasks([...tasks, task]);
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`/api/tasks/${taskId}/`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    const updatedTask = { ...task, completed: !task.completed };
    try {
      const response = await axios.put(`/api/tasks/${taskId}/`, updatedTask);
      setTasks(tasks.map(task => task.id === taskId ? response.data : task));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
