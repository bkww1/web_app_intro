import React from 'react';
import Task from './Task';

function ToDoList({ tasks, onToggleTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} task={task} onToggleTask={onToggleTask} />
      ))}
    </ul>
  );
}

// export default ToDoList;