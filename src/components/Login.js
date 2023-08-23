import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Login=(props)=>
{
    const [role,setrole]=useState("");
    const [r,setr]=useState({email:"",password:""});
    const Navigate =useNavigate();
    const changed = (e) => {
        e.preventDefault();
        setr({ ...r, [e.target.name]: e.target.value });
    }
   const signupc=()=>
   {

    Navigate('/signup');
   }
   const passemp =()=>                                                                    
   {
Navigate('/passemployer');
   }
    const handleclick=async(e)=>                
    {
        e.preventDefault();
        const response = await fetch(`http://localhost:5001/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email:r.email, password: r.password})
        });
        const json = await response.json()
        console.log(json)
        if(json.success){
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
           // props.showAlert("Logged in Successfully", "success")
           console.log(json.role);
           console.log(json.name);
           console.log(json.empid);
           props.namefunc(json.name);
           props.empfunc(json.empid);
           if(json.role=="employee")
           {
            Navigate('/employee')
           }
           else if(json.role=="employer")
           {
            Navigate('/employer')
           }
           else
           {
            Navigate('/login')
           }
         
        }
        const useEffect=()=>
        {
    props.namefunc(json.name);
    props.empfunc(json.empid);
        }
            
    }
    return(
        <div>
        <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={signupc}>Signup</button>
      </div>
      </div>
      <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={passemp}>Employer Entry</button>
      </div>
      </div>

        <div className="d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
                <form onSubmit={handleclick}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" value={r.email} onChange={changed} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Enter your business email.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" value={r.password} onChange={changed} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
      </div>
      
    )
    
}

export default Login;