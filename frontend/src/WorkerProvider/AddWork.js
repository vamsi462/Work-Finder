import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { createWork, getCategories } from "./WorkProviderAPI";
import { isAuthenticated } from "../auth";

const AddWork = () => {
  
  const [values, setValues] = useState({
    worktype: "",
    address: "",
    phone: "",
    categories: [],
    category: "",
    wage: "",
    reqWorkers: "",
    photo: "",
    loading: false,
    error: "",
    createdWork: "",
    redirectToProfile: "",
    formData: "",
  });
  const { user, token } = isAuthenticated();

  const {
    worktype,
    address,
    phone,
    wage,
    categories,
    category,
    reqWorkers,
    photo,
    loading,
    error,
    createdWork,
    redirectToProfile,
    formData,
  } = values;

  //load categories and set form data
  const init = ()=>{
      getCategories().then(data=>{
          if(data.error){
              setValues({...values, error:data.error})
          }
          else{
              setValues({...values,categories:data,formData: new FormData() })
          }
      })
  }

  useEffect(() => {
    init()
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createWork(user._id,token,formData)
    .then(data=>{
        if(data.error){
            setValues({...values,error:data.error})
        }
        else{
            setValues({
              ...values,
              worktype: "",
              address: "",
              wage: "",
              reqWorkers: "",
              photo: "",
              loading: false,
              createdWork:data.worktype
            });
        }
    })
  };
  const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
      <h4>Post Photo</h4>
      <div className="form-group">
        <label className="btn btn-secondary">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image/*"
          />
        </label>
      </div>
      <div className="form-group">
        <label className="text-muted">worktype</label>
        <input
          onChange={handleChange("worktype")}
          type="text"
          className="form-control"
          value={worktype}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">address</label>
        <textarea
          onChange={handleChange("address")}
          type="text"
          className="form-control"
          value={address}
        />
      </div>
       <div className="form-group">
        <label className="text-muted">phone</label>
        <input
          onChange={handleChange("phone")}
          type="number"
          className="form-control"
          value={phone}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">wage</label>
        <input
          onChange={handleChange("wage")}
          type="number"
          className="form-control"
          value={wage}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Category</label>
        <select onChange={handleChange("category")} className="form-control">
          <option>Please Select</option>
          {categories &&
            categories.map((c, i) => (
              <option key={i} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <label className="text-muted">Req Workers</label>
        <input
          onChange={handleChange("reqWorkers")}
          type="number"
          className="form-control"
          value={reqWorkers}
        />
      </div>
      <button className="btn btn-outline-primary" >Post A Work</button>
    </form>
  );

  const showError = () => (
    <div className="alert alert-danger" style={{display: error ? " ":"none"}}>
        {error}
    </div>
  );

   const showSuccess = () => (
     <div className="alert alert-info" style={{ display: createdWork ? "":'none'}}>
       <h2>{`${createdWork}`} is created!</h2>
     </div>
   );
    const showLoading = () => (
        loading && (<div className="alert alert-success"><h2>Loading...</h2></div>)
    );

  return (
    <Layout
      title="Add a new product"
      description={`G'day ${user.name},ready to add a new Product?`}
      className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showLoading()}
          {showSuccess()}
          {showError()}
          {newPostForm()}
        </div>
      </div>
    </Layout>
  );
};

export default AddWork;
