import axios from 'axios';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Vortex } from 'react-loader-spinner'

const Home = () => {

  const [data, setData] = useState([]);

  const [showLoader, setShowLoader] = useState(true);

  function getData() {
    axios.get("https://639b5370d51415019752861a.mockapi.io/crudyoutube")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setShowLoader(false)
      });
  }

  function showToastDeleteLoader(id) {

    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false)
    }, 1000);

    toast.success('Delete contact successful', {
      position: 'top-center'
    });


    axios.delete(`https://639b5370d51415019752861a.mockapi.io/crudyoutube/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, phone, email, gender) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
   
<>
      {showLoader ?
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />

:
<>
      <h1>Contact List</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.phone}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.gender}</td>


            


                  <td>
                    <Link to="/EditUser">
                      <button onClick={() =>
                        setToLocalStorage(eachData.id, eachData.name, eachData.phone,
                          eachData.email, eachData.gender)}>
                        <i class="fa-regular fa-pen-to-square text-success"></i>
                      </button>
                    </Link>
                  </td>

                  <td>

                    <button onClick={() => showToastDeleteLoader(eachData.id)}>
                      

                      <i class="fa-solid fa-trash text-danger"></i></button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
}
</>
  )
}

export default Home