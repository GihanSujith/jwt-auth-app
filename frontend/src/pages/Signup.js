import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import { handleError, handleSuccess } from '../utils';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Signup.css'; 
import './Toast.css'; 

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return showToast('Name, email, and password are required', 'error'); 
    }
    try {
      const url = `https://localhost:8080/auth/signup`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        showToast(message, 'success');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        showToast(details, 'error');
      } else if (!success) {
        showToast(message, 'error');
      }
    } catch (err) {
      showToast('An unexpected error occurred.', 'error');
    }
  };

  const showToast = (message, type) => {
    if (type === 'success') {
      toast.success(message, { className: 'toast toast-success' });
    } else {
      toast.error(message, { className: 'toast toast-error' });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              className="form-control form-input"
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter your name"
              value={signupInfo.name}
              autoFocus
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              className="form-control form-input"
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              className="form-control form-input"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={signupInfo.password}
            />
          </div>
          <button type="submit" className="btn signup-btn w-100">
            Sign Up
          </button>
          <div className="text-center mt-3">
            <span>Already have an account? <Link to="/login">Login</Link></span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
