import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './CreateAccount.css'; 

const CreateAccount = () => {
    const [userId, setUserId] = useState(''); 
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null); 
    const token = localStorage.getItem('token'); 
    const navigate = useNavigate(); 
    // Function to generate a random account number
    const generateAccountNumber = () => {
        return Math.floor(Math.random() * 100000000); // Generates an 8-digit random number
    };

    // Function to generate a random balance
    const generateBalance = () => {
        return (Math.random() * 10000).toFixed(2); // Generates a random balance between 0 and 10000
    };

const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate account number and balance
    const accountNumber = generateAccountNumber();
    const balance = generateBalance();

    try {
        const response = await fetch('http://localhost:8080/api/account/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                userId: parseInt(userId, 10),  // Convert to number
                accountNumber: accountNumber,
                balance: balance,
            }),
            
        });

        if (!response.ok) {
            throw new Error('Failed to create account');
        }

        // Handle success
        setSuccessMessage('Account created successfully!');
        navigate('/login'); // Redirect to the login page
        setUserId('');
        setError(null);
    } catch (err) {
        setError(err.message);
        setSuccessMessage(null);
    }
};

    

    return (
        <div className="create-account-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userId">User ID:</label>
                    <input 
                        type="text" 
                        id="userId"
                        value={userId} 
                        onChange={(e) => setUserId(e.target.value)} 
                        required 
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <button type="submit" className="submit-button">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;
