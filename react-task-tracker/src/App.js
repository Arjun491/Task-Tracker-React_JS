// import header components
import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
    // states is immutable
    // to change data we use setTasks method
        const [tasks, setTasks]= useState([{
        id:1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    
    },
    {
        id:2,
        text: 'Meeting at school',
        day: 'Feb 6th at 3:30pm',
        reminder: true,
    
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 7th at 2:30pm',
        reminder: false,
    
    }])
    // add task

    const addTask=(task)=>{
  const  newID = Math.floor(Math.random()*1000)+1;
 const newTask = {newID, ...task}
 setTasks([...tasks, newTask]);
    }
    // Delete task

    const deleteTask=(id)=>{
      // we will be using useState function called setTasks(), note useState is immutable
      // only way to make it mmutable is to use its method named as setTasks()
      // alert(id);
// setTasks(tasks.filter((task)=>task.id!=id))

setTasks(tasks.filter((e)=>e.id!=id));
    }



// Toggle reminder

const toggleReminder = (id)=>{

  // console.log(id);

setTasks(tasks.map((task)=>task.id===id?{...task, reminder:!task.reminder}:task));
}

  return (
    // DOM manipulation
     
    <div className="container"> 

<Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
{showAddTask && <AddTask onAdd={addTask} />}
{tasks.length>0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h3>No Tasks Pending</h3>}

    </div>

  );
}


/*class components example*/
// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }
export default App;

