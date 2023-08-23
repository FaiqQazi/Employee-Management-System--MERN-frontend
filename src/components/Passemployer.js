import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Passemployer=(props)=>
{
    const Navigate=useNavigate();
    const [pass,setpass]=useState("")
    const handleclick=()=>
    {
if(pass=="employer123")
{
Navigate("/employer");
}
    }
    const log=()=>
    {
        Navigate('/login');
    }
   
  const handleChange = (e) => {
    setpass(e.target.value);
  };

    return(
        <div>
             <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={log}>Login</button>
      </div>
      </div>
        <div>


        <div className="d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
                <form onSubmit={handleclick}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Employer Pass</label>
                        <input type="text" name="pass" value={pass} onChange={handleChange} className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp"  />
                        <div id="emailHelp" className="form-text">Enter your Employer Pass</div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Enter Portal</button>
                </form>
            </div>
        </div>
      </div>
      </div>
      
    )
    
}
export default Passemployer;