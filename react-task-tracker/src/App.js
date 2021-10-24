// import header components
import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';


function App() {

  const [showAddTask, setShowAddTask] = useState(false);
    // states is immutable
    // to change data we use setTasks method
        const [tasks, setTasks]= useState('')
    // add task
useEffect(()=>{
const getTasks= async () =>{
  const tasksFromServer = await fetchTasks()
  setTasks(tasksFromServer)
}
getTasks()
}, []);

// fetch Tasks data
const fetchTasks = async () =>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json();
  return data;
}
// fetch single task data to update
const fetchTask = async (id) =>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json();
  return data;
}
    const addTask= async (task)=>{
//   const  newID = Math.floor(Math.random()*1000)+1;
//  const newTask = {newID, ...task}
//  setTasks([...tasks, newTask]);
const res = await fetch('http://localhost:5000/tasks', {
  method: 'POST',
  headers:{
    'Content-type': 'application/json',
  },
  body: JSON.stringify(task),
})
const data = await res.json();
setTasks([...tasks, data]);
    }
    // Delete task

    const deleteTask= async (id)=>{
      // we will be using useState function called setTasks(), note useState is immutable
      // only way to make it mmutable is to use its method named as setTasks()
      // alert(id);
// setTasks(tasks.filter((task)=>task.id!=id))
await fetch(`http://localhost:5000/tasks/${id}`, 
{method:'DELETE'})
setTasks(tasks.filter((e)=>e.id!=id));
    }



// Toggle reminder

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })
    const data = await res.json();
    setTasks(tasks.map((task)=> 
    task.id===id?{...task, reminder: data.reminder}:task))
  }
  return (
    <Router>

     
    <div className="container"> 

<Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
{showAddTask && <AddTask onAdd={addTask} />}
{tasks.length>0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h3>No Tasks Pending</h3>}
<Router path='/about' component ={About} />
<Footer />
    </div></Router>

  );
}


/*class components example*/
// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }
export default App;

