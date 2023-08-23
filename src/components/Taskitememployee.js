// import React, { useState,useEffect } from 'react';
// import Addreport from './Addreport';
// //import Taskitememployee from './Taskitememployer';

// const Taskitememployee=(props)=>
// {
  
// return(

// <div className="card text-center">
  
//   <div className="card-body">
//     <h5 className="card-title">{props.title}</h5>
//     <p className="card-text">{props.description}</p>
//     <p className="card-text">{props.report}</p>
  
//   </div>
//   <div className="card-footer text-body-secondary">
//     {props.date}
//   </div>
//   <Addreport title={props.title} description={props.description} report={props.report} updatetasks={props.updatetasks} id={props.id} />
// </div>
// );
// }
// export default Taskitememployee;
import React from 'react';
import './Taskitememployee.css'; // Import your CSS file
import Addreport from './Addreport';

const Taskitememployee = (props) => {
  const cardStyle = {
    margin: '10px 0', // Adding top and bottom margins of 10px
    // Add other styles here
  };
  return (
    
    <div className="card task-card" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.report}</p>
      </div>
      <div className="card-footer text-body-secondary">{props.date}</div>
      <Addreport
        title={props.title}
        description={props.description}
        report={props.report}
        updatetasks={props.updatetasks}
        id={props.id}
      />
    </div>
  );
}

export default Taskitememployee;
