import React, { useState } from "react";
import Layout from "../core/Layout";
import{signin,authenticate,isAuthenticated} from '../auth'
import { Link, Redirect } from "react-router-dom";


const SignIn = () => {
  const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false,
  });
  const { email, password, loading ,redirectToReferrer ,error} = values;
  const {user} = isAuthenticated()

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    
    event.preventDefault();
    setValues({...values,error:false,loading:true})
    signin({  email, password })
    .then(data =>{
      if(data.error){
        setValues({...values,error:data.error,loading:false})
      }else{
      authenticate(data,()=>{
            setValues({
                ...values,
                redirectToReferrer: true,

            })
      })
      }
    })
  }

  const showSignInForm = () => (
    <form className="signup-form mx-8">
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
          placeholder=" Enter Email address"
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
          placeholder="Enter your password"
          type="password"
          onChange={handleChange("password")}
        />
      </div>

      {/* signin button */}
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={clickSubmit}>
          Login
        </button>
      </div>
      
      <p className="text-center ">
       Don't Have an account? <Link to="/signup">SignUp</Link>
      </p>
    </form>
  );

  const showError = ()=>(
        <div className ="alert alert-danger" style={{display:error ? '' : 'none'}}>
          {error}
      </div>
  )
   const showLoading= ()=>(
    loading&&(<div className="alert alert-info"><h2>loading...</h2></div>)
  )

  const redirectUser = ()=>{
      if(redirectToReferrer){
         if(user&&user.role===1){
             return <Redirect to ="/admin/dashboard"/>
         }
         else{
             return <Redirect to ="/user/dashboard"/>
         }
      }
      if(isAuthenticated()){
          return <Redirect to ="/"/>
      }
  }
  return (
    <Layout
      Layout
      title="Signin"
      description = "Signin to WorkFinder"
      className="container col-md-8 offset-md-2">
      {showError()}
      {showLoading()}
      {showSignInForm()}
      {redirectUser()}
    </Layout>
  );
};

export default SignIn;
