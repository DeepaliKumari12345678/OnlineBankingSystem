import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserPage.css';

const UserPage = () => {
  const { username } = useParams();

  return (
    <div className="user-page-container">
      <h2>Welcome, {username}!</h2>
      <p>Your account has been created successfully.</p>
      <Link to="/login" className="btn-login">Go to Login</Link>
    </div>
  );
};

export default UserPage;
