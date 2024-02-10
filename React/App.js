// import React from 'react';
import React from 'react/client';
import ToDoList from './components/ToDoList';
import NewTask from './components/NewTask';
import Filter from './components/Filter';


function App() {
    // const [tasks, setTasks] = useState([]);
    // const [hideCompleted, setHideCompleted] = useState(false);
  
    // const addTask = (taskText) => {
    //   setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    // };
  
    // const toggleTask = (taskId) => {
    //   setTasks(tasks.map(task => {
    //     if (task.id === taskId) {
    //       return { ...task, completed: !task.completed };
    //     }
    //     return task;
    //   }));
    // };
  
    // const toggleHideCompleted = () => {
    //   setHideCompleted(!hideCompleted);
    // };
  
    // const filteredTasks = hideCompleted ? tasks.filter(task => !task.completed) : tasks;
  
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <NewTask onAddTask={addTask} />
        <Filter hideFinishedTasks={hideFinishedTasks} />
        <ToDoList tasks={filteredTasks} onToggleTask={toggleTask} />
        {tasks.length === 0 && <p>Brak zadań</p>}
      </div>
    );
  }
  
 // export default App;