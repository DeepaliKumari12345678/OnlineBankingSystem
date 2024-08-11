import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Importing eye icons

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const navigate = useNavigate();

  const suggestUsername = (email) => {
    return email.split('@')[0]; // Suggest the part of the email before '@'
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, fullName, email }),
    });

    if (response.ok) {
      setUsername('');
      setPassword('');
      setFullName('');
      setEmail('');
      setError('');
      navigate('/login');
    } else {
      const data = await response.json();
      setError(data.error || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setUsername(suggestUsername(e.target.value));
            }}
            required
          />
        </div>
        <div className="form-group password-container">
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'} // Toggle input type
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        <button type="submit" className="btn-register">Register</button>
      </form>
    </div>
  );
};

export default Register;
