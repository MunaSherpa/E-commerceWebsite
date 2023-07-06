import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { APIclass } from '../../config';


const Register = () => {
  const api = new APIclass();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfimPassword] = useState('');

  const createUser = async (e:any) => {
    e.preventDefault();
    

    const formData = {
      email: email,
      password: password,
      confirmPassword: confirmpassword
    }
    try {
      const res = await axios.post(`${api.baseUrl}register`, formData);
      console.log(res.data);
      if (res.data.status === 200) {
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <>
    <div className="container forms">
        <div className="form signup">
            <div className="form-content">
                <form onSubmit={createUser}>
                <header>Register</header>
                    <div className="field input-field">
                        <input name='email' type="email" placeholder="Email" className="Email" value={ email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="field input-field">
                        <input name='password' type="Password" placeholder=" Create Password" className="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        
                    </div>

                    <div className="field input-field">
                        <input  name='confirmpassword' type="Password" placeholder=" Confirm Password" className="Password" value={confirmpassword} onChange={(e) => setConfimPassword(e.target.value)}/>
                       
                    </div>

                    <div className="field button-field">
                        <button  type='submit'>Register</button>

                    </div>

                    <div className="form-link">
                          <span>Already have an account ? <a href="/login" className="signup-link">Login</a></span>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register