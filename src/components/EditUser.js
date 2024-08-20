
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

const EditUser = () => {
   
  const history = useNavigate();

const [id, setId] = useState();
   
    const { register, formState: { errors }, handleSubmit } = useForm(
      {
        defaultValues: {
          name: localStorage.getItem("name"),
          phone: localStorage.getItem("phone"),
          email: localStorage.getItem("email"),
          gender:localStorage.getItem("gender"),
        }
      }
    );
    
    const onSubmit = (data) => {
        
        axios.put(`https://639b5370d51415019752861a.mockapi.io/crudyoutube/${id}`,data)
        
        .then(() => {
          toast.success('Add contact successful', {
            position: 'top-center'
          });

          history("/");
        });

    

    };
    useEffect(() => {
      setId(localStorage.getItem("id"));
      // setName(localStorage.getItem("name"));
      // setPhone(localStorage.getItem("phone"));
      // setEmail(localStorage.getItem("email"));
      // setGender(localStorage.getItem("gender"));
      },[]);
  

  return (
    <div className='container'>
    <div className='w-75 mx-auto p-5'>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Name:</label>
        <div className='form-group'>
          <input className='form-control form-control-lg'
           placeholder='Name'
            {...register("name", { required: true, maxLength: 15})} 
            aria-invalid={errors.name ? "true" : "false"} 
          />
{errors.name?.type === 'required' && <p role="alert"> Name is required</p>}
        </div><br /><br />


        <label>Phone:</label>
        <div className='form-group'>
          <input  className='form-control form-control-lg'
           placeholder='Phone'
           {...register("phone", { required: true, maxLength: 10})} 
           aria-invalid={errors.phone ? "true" : "false"}
            />
{errors.phone?.type === 'required' && <p role="alert"> Phone is required</p>}
{errors.phone?.type === 'maxLength' && <p role="alert"> MaxLength is 10</p>}
        
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
{errors.email?.type === 'required' && <p role="alert text-danger"> Email is required</p>}
        </div><br /><br />

        <label>Gender:</label>
        <div className='form-group'>
          <select {...register("gender",{ required: true })}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          {errors.gender?.type === 'required' && <p role="alert"> Gender is required</p>}
        </div><br /><br />


      <input className='btn btn-primary' type='submit' value='Update Contact' />
      </form>
      </div>
    </div>

)
}


export default EditUser