import React from 'react'
import { FaTimes } from 'react-icons/fa';
const Task = ({taskList, onDelete, onToggle}) => {
    return (
        <div className={`task ${taskList.reminder? 'reminder':'reminder-pending'}`} onDoubleClick={()=>onToggle(taskList.id)}>
            <h3>{taskList.text} <FaTimes style={{color:'red', cursor:'pointer'}}
            onClick={()=> onDelete(taskList.id)}
            />
            </h3>
            <p>{taskList.day}</p>
        </div>
    )
}

export default Task
