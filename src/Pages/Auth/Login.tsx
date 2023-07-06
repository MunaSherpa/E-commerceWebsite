import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { APIclass } from '../../config';


const Login = () => {
  const api = new APIclass();
  const navigate = useNavigate();
  const loginUser = async (e:any) => {
    e.preventDefault();
   const data = new FormData(e.currentTarget)

   let formData = {
    email: data.get('email'),
    password: data.get('password')
   }
   
    try {
      const res = await axios.post(`${api.baseUrl}login`, formData);
      console.log(res.data);
      if (res.data.status === 200) {
        localStorage.setItem("token",res.data.newData.token);
        localStorage.setItem("id", res.data.newData.id);
        localStorage.setItem("role", res.data.newData.role);

        if (res.data.newData.role === "admin") {
          window.location.href = "/admin/dashbord";
        } else {
          window.location.href = "/";
        }
      } else {
        alert(res.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    <div className="container forms">
          <div className="form login">
              <div className="form-content">
                  

                  <form onSubmit={loginUser}>
                  <header>Login</header>
                      <div className="field input-field">
                          <input name='email' type="email" placeholder="Email" className="Email" />
                      </div>

                      <div className="field input-field">
                          <input name='password' type="Password" placeholder="Password" className="Password" />
                          <i className='bx bx-hide eye-icon'></i>
                      </div>

                      <div className="field button-field">
                          <button type='submit'>Login</button>
                          
                      </div>

                      <div className="form-link">
                            <span>Don't have an account ? <a href="/register" className="signup-link">Register</a></span>
                      </div>
                    
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Login