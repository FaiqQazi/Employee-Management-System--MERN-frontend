import React, { useState,useEffect } from 'react';
import Taskitememployer from './Taskitememployer';
const Employer=(props)=>
{
    const[emptasks,setemptasks]=useState([]);
    const host='http://localhost:5001';
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const [empid,setempid]=useState("");
    const getemptasks = async () => {
        //TODO API KEY
        const response = await fetch(`${host}/api/tasks/getallemployertasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        if(!json)
        {

        }
        console.log(json)
        setemptasks(json)
    }
    useEffect(()=>
    {
        getemptasks();
    },[])
    
    const addemptask = async (title, description,empid) => {
        //TODO API KEY

        const response = await fetch(`${host}/api/tasks/createnewtask`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')

            },
            body: JSON.stringify({title, description, empid})
        });
        const emptask = await response.json()
        setemptasks(emptasks.concat(emptask))
       
        
    }
    const deleteemptask = async (id) => {
        // TODO API KEY
        const response = await fetch(`${host}/api/tasks/deletetask/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem ('token')

            }
        });
        const json = await response.json();
        console.log(json)


        console.log("Deleting the emptask with id" + id)
        const newemptasks = emptasks.filter((emptask) => { return emptask._id !== id })
        setemptasks(newemptasks)
    }
    const handleadd=()=>
    {
        addemptask(title,description,empid)
    }
const a=(e)=>
{
e.preventDefault();
settitle(e.target.value)
}
const b=(e)=>
{
e.preventDefault();
setdescription(e.target.value)
}
const c=(e)=>
{
e.preventDefault();
setempid(e.target.value)
}

return (
    
   
    <div>
    <form onSubmit={handleadd}> 
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">title</label>
        <input type="text" value={title} onChange={a}
        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">description</label>
        <input type="text" onChange={b} value={description} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Employee id</label>
        <input type="text" onChange={c} value={empid} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
      </div>
     
      <button type="submit" className="btn btn-primary">Assign</button>
    </form>
    <hr/>
    <hr/>
    <div className="row my-3">
            <h3>Welcome {props.name}</h3>
            <hr/>
        <h2>Assigned Tasks</h2>
        <div className="container">
          <h4>{emptasks.length===0 && 'No tasks to display'}</h4>
        </div>
        {emptasks.map((tasks) => {
          return <Taskitememployer key={tasks._id} id={tasks._id} deleteemptask={deleteemptask} title={tasks.title} report={tasks.report} description={tasks.description} date={tasks.date} empid={tasks.empid}  />;
        })}
      </div>
    </div>

    
    

)
}
export default Employer;