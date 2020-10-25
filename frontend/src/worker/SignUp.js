import React,{useState} from 'react'
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import {signup} from '../auth'

const SignUp = () => {

     const [values, setValues] = useState({
         name: "",
         email: "",
         password: "",
         error: "",
         success: false,
     });
    const { name, email, password, success,error } = values;

     const handleChange = (name) => (event) => {
         setValues({
             ...values,
             error: false,
             [name]: event.target.value
         });
     };

    const clickSubmit = (event) => {
    
            event.preventDefault();
            setValues({...values,error:false})
            signup({ name, email, password })
            .then(data =>{
           if(data){
                setValues({
                    ...values,
                    name:'',
                    email:'',
                    password:'',
                    error:'',
                    success:true 
                
                 })
                }
            })
  }
    const showSignUpForm = () => (
    <form className="signup-form mx-4">
      {/* username */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-user"></i>
          </span>
        </div>
        <input
           //value={name}
          onChange={handleChange("name")}
          className="form-control"
          placeholder="Username"
          type="text"
        />
      </div>
      {/* email */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
        </div>
        <input
           value={email}
          className="form-control"
          placeholder="Email address"
          type="email"
          onChange={handleChange("email")}
        />
      </div>
      {/* password */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
           value={password}
          className="form-control"
          placeholder="Create password"
          type="password"
          onChange={handleChange("password")}
        />
      </div>

      {/* signup button */}
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={clickSubmit}
          >
          Signup
        </button>
      </div>
      {/* already have account */}
      <p className="text-center ">
       Already Have an account? <Link to="/signin">Log In</Link>
      </p>
    </form>
  );
 const showError = ()=>(
        <div className ="alert alert-danger" style={{display:error ? '' : 'none'}}>
          {error}
      </div>
  )
   const showSuccess= ()=>(
    <div className ="alert alert-info" style={{display:success ? '' : 'none'}}>
      You  are account has been created, please <Link to ="/signin">Signin</Link>

    </div>
   )
    return (
        <Layout
        Layout
        title = "Signup"
        description = "Signup to Restaurant"
        className = "container col-md-8 offset-md-2" >
          {showError()}
          {showSuccess()}
          {showSignUpForm()}
        </Layout>
        
    )
}

export default SignUp
