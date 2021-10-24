import React from 'react'
import { useState } from 'react'
const AddTask = ({onAdd}) => {

    const[text, setText]= useState('');
    const[day, setDay]= useState('');
    const[reminder, setReminder]= useState(false);

    const onSubmit = (e)=>{
        e.preventDefault()
       if(!text || !day)
       {
           if(!text){
               alert('Please add a task name'); 
               document.getElementById('taskName').focus();
            }
          else if(!day){
               alert('Please add a date & time'); 
               document.getElementById('day').focus();
            }

       }
       else{  onAdd({text,day,reminder})}

    

     
// clear the form
       setText('')
       setDay('')
       setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>

<div className='form-control'>
<label>Task</label>
<input id='taskName' type='text' placeholder='Add Task' value={text} onChange={(e)=> setText(e.target.value)}></input>
</div>
<div className='form-control'>
<label>Day & Time</label>
<input id='day' type='text' placeholder='Add Date & Time' value={day}
onChange={(e)=> setDay(e.target.value)}
></input>
</div>
<div className='form-control' className='form-control-check'>
<label>Set Reminder</label>
<input id='reminder' type='checkbox' checked={reminder }
value={reminder}
onChange={(e)=> setReminder(e.currentTarget.checked)}
 ></input>
</div>
<input type='submit' value='Save Task' className='btn btn-block' />
 
        </form>
    )
}

export default AddTask
