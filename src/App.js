import { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  }

  const AddTaskHandler = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  }

  const deleteTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  }
   

  return (
    <>
 <nav className="navbar">
      <h1>Task Manager</h1>
    </nav>
<div className="container">
      <form onSubmit={AddTaskHandler}>
        <input 
          type="text" 
          name="task" 
          placeholder="Add a Task"  
          value={task}
          onChange={handleInput} 
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>

      {taskList.length === 0 ? (
        <div className="empty">
          Task list is empty
        </div>
      ) : (
        <div className="container">
          {taskList.map((item, index) => (
            <div key={index} className="task-item">
              {item} 
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}



    {/* <div className="container">
    {taskList.map((item, index) => (
        <div key={index} className="task-item">
          {item} 
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </div> */}

    </>
  );
}

export default App;



