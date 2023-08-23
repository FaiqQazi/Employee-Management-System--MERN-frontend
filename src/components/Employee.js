import React, { useState,useEffect } from 'react';
const Employee=(props)=>
{
    const host = 'http://localhost:5001'
    const taskInitial = []
    const [task, settask] = useState(taskInitial)
    // Get All task
    const gettask = async () => {
        //TODO API KEY
        const response = await fetch(`${host}/api/task//getalltasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        console.log(json)
        setTask(json)
    }
    const updatetasks=(id,title,description ,report)=>
    {

    }
    return (
        <div>
            <h3>Welcome {props.name}</h3>
            <hr/>
            {task.map((element)=>
            {
 return <Taskitememployee assignedby={element.assignedto} title={element.title} description={description} date={element .date} id={task.id} />
            })}
            

        </div>
    )
}
export default Employee;