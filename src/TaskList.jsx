import React from 'react'

const tasks=['learn react','practice coding','build projects']
const handleTasks=()=>{
    console.log(tasks)
}

const handleClick=(task)=>{
    console.log('you clicked on ${task}')
}


export const TaskList = () => {
  return (
    <div>
        <h1>Task List</h1>
        <button onClick={handleTasks}>Get Task</button>
        <ul>
            {
                tasks.map((task,index)=>(
                    <li key={index}>
                        {task}
                        <button onClick={()=>handleTasks(task)}>Click Me</button>
                        </li>
                    
                ))
            }
        </ul>    
    </div>
  )
}

export default TaskList