
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from "react-hook-form";

import PropTypes from 'prop-types';

const AddUser = (props) => {
  
  const history = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const onSubmit = (data) => {

    axios.post("https://639b5370d51415019752861a.mockapi.io/crudyoutube", data)
    .then(() => {

      toast.success('Add contact successful', {
        position: 'top-center'
      });

      history("/");
    });


    AddUser.propTypes = {
      name:  PropTypes.string,
    }


  }


  return (

    <div className='container'>
      <div className='w-75 mx-auto p-5'>
        <h2>New Contact Card </h2>
       
        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Name:</label>
          <div className='form-group'>{props.name}
            <input
            className='form-control form-control-lg'
             placeholder='Name'
              {...register("name", { required: true, maxLength: 15 })} 
              aria-invalid={errors.name ? "true" : "false"} 
            />
{errors.name?.type === 'required' && <p role="alert" className='text-danger'> Name is required</p>}
          </div><br /><br />


          <label>Phone:</label>
          <div className='form-group'>
            <input  className='form-control form-control-lg'
             placeholder='Phone'
             {...register("phone", { required: true, maxLength: 10})} 
             aria-invalid={errors.phone ? "true" : "false"}
              />
{errors.phone?.type === 'required' && <p role="alert" className='text-danger'> Phone is required</p>}
          </div><br /><br />

          <label>Email:</label>
          <div className='form-group'>
            <input className='form-control form-control-lg'
             placeholder='Email'
             {...register("email", { required: true, pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }})} 
             aria-invalid={errors.email ? "true" : "false"}
        />
{errors.email?.type === 'required' && <p role="alert" className='text-danger'> Email is required</p>}
          </div><br /><br />

          <label>Gender:</label>
          <div className='form-group'>
            <select {...register("gender",{ required: true })}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            {errors.gender?.type === 'required' && <p role="alert" className='text-danger'> Gender is required</p>}
          </div><br /><br />



          <input type='submit' value='Add New Contact' 
          className='btn btn-primary' />
         
        </form>
      </div>
    </div>
  )
}

export default AddUser