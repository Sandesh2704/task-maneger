// import React from 'react'

// export default function Task() {
//   return (
//     <div>Task</div>
//   )
// }



import { useState } from 'react';
import './App.css';

export default function Task(){
   
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
    < >
    <form action=""onSubmit={AddTaskHandler}>
    <input type="text" 
           name='task' 
           placeholder='Add a Task'  
           value={task}
           onChange={handleInput}  />
    <button type='submit' >Add Task</button>
    </form>
   {
    taskList.map((item, index)=>{
      return <div key={index}>{item} <button onClick={()=>deleteTask(index)}>delete</button></div>
    })
   }
    </>
  );
}

