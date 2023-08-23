import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
const Taskitememployer=(props)=>
{

return (

<div className="card text-center">
  <div className="card-header">
    
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <p className="card-text">{props.report}</p>
    <Button variant="primary" size="lg" onClick={() => props.deleteemptask(props.id)} >

        Done
      </Button>
  </div>
  <div className="card-footer text-body-secondary">
    {props.date}
  </div>
</div>
)

}
export default Taskitememployer;