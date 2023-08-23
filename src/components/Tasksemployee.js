import React, { useState,useEffect } from 'react';
import Taskitememployee from './Taskitememployee';
const Tasksemployee=(props)=>
{
    const host = 'http://localhost:5001'
    const tasksInitial = []
    const [tasks, settasks] = useState(tasksInitial)
    
    const gettasks = async () => {
        //TODO API KEY
        const response = await fetch(`${host}/api/tasks/getalltasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        console.log(json)
        settasks(json)
    }
    useEffect(() => {
      console.log(props.gemp);
      
        if(localStorage.getItem('token')){
          gettasks()
        }
        // settasks(json)
        // else{
        //   history.push("/login")
        // }
       
        // eslint-disable-next-line
      }, [])
    const updatetasks=(id,newtitle,newdescription,newreport)=>
    {
      console.log(newtitle)
      console.log(newdescription)
      console.log(newreport)
      console.log("why am i not updating the note")
        const updatedtasks=tasks.map((task)=>
        {
            if(id==task.id)
            {
                return {...task,title:newtitle ,description:newdescription ,report:newreport}
                console.log(task)
            }
            return task;
        })
        settasks(updatedtasks)
    }
    return (
        <div className="row my-3">
            <h3>Welcome {props.name}</h3>
            <hr/>
        <h2>Your Tasks</h2>
       
        <div className="container">
          <h4>{tasks.length===0 && 'No tasks to display'}</h4>
          
          <h4>{props.name}                    {props.gemp}</h4>
        </div>
        {tasks.map((task) => {
  return props.gemp == task.empid ? (
    <Taskitememployee
      key={task._id}
      id={task._id}
      updatetasks={updatetasks}
      title={task.title}
      description={task.description}
      date={task.date}
      report={task.report}
    />
  ) : null;
})}
      </div>

    )
}
export default Tasksemployee;