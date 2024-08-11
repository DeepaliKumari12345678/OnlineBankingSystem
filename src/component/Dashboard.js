import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const [accountDetails, setAccountDetails] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccountDetails = async () => {
            const userId = localStorage.getItem('userId'); // Get the user ID from local storage
            try {
                const response = await fetch(`http://localhost:8080/api/accounts?userId=${userId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json(); // Parse the response as JSON
                setAccountDetails(data);
            } catch (error) {
                console.error('Error fetching account details:', error);
                setError(error.message); // Set the error message
            } finally {
                setLoading(false); // Loading is done
            }
        };
        fetchAccountDetails();
    }, []);

    const handleLogout = async () => {
        const userId = localStorage.getItem('userId'); // Get the user ID from local storage
        try {
            const response = await fetch('http://localhost:8080/api/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Id: userId }), // Send the user ID in the body
            });

            if (response.ok) {
                // Logout successful, navigate to home
                navigate('/');
            } else {
                const errorData = await response.json();
                console.error('Logout failed:', errorData.error || 'Unknown error');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <h1>DJ Bank</h1>
                <div className="navbar-buttons">
                    <Link to="/about-us" className="navbar-button">About Us</Link>
                    <Link to="/contact-us" className="navbar-button">Contact Us</Link>
                    <button onClick={handleLogout} className="navbar-button">Logout</button>
                </div>
            </nav>
            <div className="body-content">
                <h2>Account Details</h2>
                {loading ? ( // Display loading message
                    <p>Loading account details...</p>
                ) : error ? ( // Display error message
                    <p>Error fetching account details: {error}</p>
                ) : (
                    <table className="account-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Account Number</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accountDetails.map(account => (
                                <tr key={account.id}>
                                    <td>{account.id}</td>
                                    <td>{account.account_number}</td>
                                    <td>{account.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
